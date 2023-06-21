import { isEmpty, isNull, isUndefined } from "lodash";
import helper from "../Helper/helper";
import { RoleMenuAccess } from "../db/models/RoleMenuAccess";
import SubMenu from "../db/models/SubMenu";
import Role from "../db/models/Role";

const createRoleAccess =  async(req:any, res:any) =>{
    try {
        const {roleId,subMenuId} = req.body;
if(isUndefined(roleId) || isUndefined(subMenuId)){
return res.status(400).send(helper.ResponseData(400,'Information is required',null,null));
}
const roleaccessmenu =  new RoleMenuAccess();
roleaccessmenu.set('subMenuId',subMenuId);
roleaccessmenu.set('roleId',roleId);
roleId.set('active',true);
if(roleaccessmenu){
    return res.status(400).send(helper.ResponseData(400,'Information exist',null,null))
}
return res.status(200).send(helper.ResponseData(200, 'Information has been created', null ,roleaccessmenu));
    } catch (error) {
        return res.status(500).send(helper.ResponseData(500,"Error from  server", error, null))
    }

}

const updateRoleAccessMeny =  async(req:any, res:any) =>{
    try {
        const {id, subMenuId,roleId,} = req.params;
        if(isUndefined(id) || isEmpty(id)){
            return res.status(400).send(helper.ResponseData(400,"Id not found",null,null));
        }
const menu = await  RoleMenuAccess.findOne({
    where:{
        id:id,
        active:true
    }
});
if(!menu){
    return res.status(400).send(helper.ResponseData(400,'Information not found',null,null));
}
menu.set('subMenuId',subMenuId);
menu.set('roleId',roleId);
await menu.save();
return res.status(200).send(helper.ResponseData(200,"Information has been update",null,{data:menu}));
    } catch (error) {
        return res.status(500).send(helper.ResponseData(500,"Error from server",error, null));
    }
}

const  getAllRolleAccessMenu = async(req:any, res:any) =>{
    try {
        const menu =  RoleMenuAccess.findAll({
            where:{
                active:true
            },
            include:[{
                model:SubMenu,
                attributes:['name']
            },
        {
            model:Role,
            attributes:['roleName']
        }]
        })
    } catch (error) {
        
    }
}   
const removeRoleAcessMenu = async(req:any, res:any) =>{
const {id,active} = req.body;
try {
    if(isUndefined(id)){
        return res.status(400).send(helper.ResponseData(400,"id not found", null,null));
    }
    const menu =  await RoleMenuAccess.findOne({
        where:{
            id:id,
            active:true
        }
    });
    if(!id){
        return res.status(400).send(helper.ResponseData(400,"Information not found",null,null));
    }
    if(isNull(menu)){
        return res.status(400).send(helper.ResponseData(400,"List is null",null,null))
    }
    menu.set('active',false);
    await menu.save()
    return res.status(200).send(helper.ResponseData(200,"Access has been delete",null,menu));
} catch (error) {
    
}
}

export default {createRoleAccess,updateRoleAccessMeny,removeRoleAcessMenu,getAllRolleAccessMenu}