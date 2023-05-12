import { isEmpty, isUndefined } from "lodash";
import helper from "../Helper/helper";
import Category from "../db/models/Category";

export class CategoryController {
    static add = async(req:any, res:any)=>{
        try {
            const {label,description} =  req.body;
            if(isUndefined(label) || isEmpty(label)){
                return res.status(400).send(helper.ResponseData(400, "Client is not defined", null, null));
            }
            const category  =  new Category()
            category.set('label', label);
            category.set('descriptiont',description);
            await category.save();
            return res.status(200).send(helper.ResponseData(200,"Category has been created", null, category))
        } catch (error) {
            return res.status(500).send(helper.ResponseData(500, "Server Erro", error, null))
        }
    }
    static categoryList =  async(req:any,res:any) => {
        try {
            const category = await Category.findAll();
            if(isEmpty(category)){
                return res.status(201).send(helper.ResponseData(201,"Information is empty", null, category))
            }
            return res.status(200).send(helper.ResponseData(200, "Category list", null, category));
        } catch (error) {
                return res.status(500).send(helper.ResponseData(500, "Error from server , please wait  a few minute", error, null));
        }
    }

    static update = async(req:any, res:any) =>{
        const {label, id,description} =  req.body;
        try {
            const categoryId =  await Category.findByPk(id);
            if(!categoryId){
                return res.status(400).send(helper.ResponseData(400, "Identifiant not found", null, null));
            }
           categoryId.set('label',label);
           categoryId.set('descriptiont',description);
            await categoryId.save();
            return res.status(200).send(helper.ResponseData(200,"Information has been updates",null, categoryId));
        } catch (error) {
            return res.status(500).send(helper.ResponseData(500, "Error from server, please wait for a moment", error, null));
        }
    }

    static delete =  async(req:any,res:any) =>{
       try {
        const {id} = req.body;
        if(isUndefined(id)){
            return res.status(400).send(helper.ResponseData(400,"Identifiant is not defined", null, null));
        }
    const cateory = await Category.findByPk(id);
    if(!cateory){
        return res.status(400).send(helper.ResponseData(400,"Infromation invalid",null, null));
    }
    await cateory.destroy();
    return res.status(400).send(helper.ResponseData(200,"Category has been delete", null, null))
       } catch (error) {
        return res.status(500).status(helper.ResponseData(500,"Error from server, please reload", error,null))
       }
    }

}