
import Validator from "validatorjs";
import { Rules } from "validatorjs"
import helper from "../Helper/helper";

export const subMenuValidation =  async(req:any, res:any,next:any) => {
    const { name, ordering, title, active, masterMenuId,isTargetSelf } = req.body;
    try {
        const data =   {
            name,
            ordering,
            title,
            active,
            masterMenuId,
            isTargetSelf
        };
    
        let rules:Validator.Rules =  {
            name:'required',
            ordering:'required | max:250',
            title:'required | max:250',
            active:'required',
            masterMenuId:'min:20',
            isTargetSelf:'min:5'
        }
        const validator =  new  Validator(data,rules);
        if(validator.fails()){
            return res.status(400).send(helper.ResponseData(400,"Bad request",null,null));
        }
        next()
    } catch (error) {
        return res.status(500).send(helper.ResponseData(500,"Error from server",error,null));
    }
 
}