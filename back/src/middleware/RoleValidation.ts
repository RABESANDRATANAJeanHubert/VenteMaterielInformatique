import Validator from "validatorjs";
import helper from "../Helper/helper";
import Role from "../db/models/Role";

export const RoleValidation =  async(req:any, res:any, next:any) =>{
try {
    const {roleName,active} = req.body;
    const data = {
        roleName,active
    }

    const dataRole:Validator.Rules = {

        roleName:'required',
        active:'required'

    };
    const validator = new Validator(data,dataRole);
    if(validator.fails()){

        return res.status(400).send(helper.ResponseData(400,"Information required",null,null));

    }
    const name = await Role.findOne({
        where:{
            roleName:data.roleName
        }
    })
    if(name){
        return res.status(400).send(helper.ResponseData(400,"Bad request"," RoleName is already exist", null))
    }
    next();

} catch (error) {

    return res.status(500).send(helper.ResponseData(500,"Erro from server",error,null));

}
}