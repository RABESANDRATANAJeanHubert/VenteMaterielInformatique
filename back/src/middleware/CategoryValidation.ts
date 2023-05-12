import Validator from "validatorjs";
import helper from "../Helper/helper";
import Category from "../db/models/Category";


export const categoryValidation =  async(req:any, res:any)=> {
    const {label, description} =  req.body;
    const dataCategory =  {
        label, description
    }
    const rules: Validator.Rules = {
        label: "required|string|max:50",
        description:'required|max:250'
      };
      const validator = new Validator(dataCategory,rules);
      if(validator.fails()){
        return res.status(400).send(helper.ResponseData(400, "Bad request, check your filds", validator.errors, null));
      }

      const checkCategoryName = await Category.findOne({
        where:{label:dataCategory.label}
      });
      if(checkCategoryName){
        return res.status(400).send(helper.ResponseData(400, "Bad request, name has been added, please find another name", null, null));
      }
}