
import Validator from "validatorjs";
import { Rules } from "validatorjs"

export const subMenuValidation =  async(req:any, res:any) => {
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
        const validator =  new  Validator(data,rules)
    } catch (error) {
        
    }
 
}