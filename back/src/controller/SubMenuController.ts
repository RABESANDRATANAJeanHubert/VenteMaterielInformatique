import { isEmpty, isUndefined } from "lodash";
import helper from "../Helper/helper";
import SubMenu from "../db/models/SubMenu";
import { or } from "sequelize";

export class SubMenuController {
    static createSubMenu = async(req:any, res:any) =>{
        const {name, title, ordering, active,masterMenuId,isTargetSelf}  =  req.body;
        if(isUndefined(name) || isUndefined(ordering)|| isUndefined(active) || isUndefined(masterMenuId) || isUndefined(isTargetSelf)){
            return res.status(400).send(helper.ResponseData(400,"Information required", null, null));
        }
        try {
            const submenu = new SubMenu();
            submenu.set("name", name);
            submenu.set("title",title);
            submenu.set("ordering",ordering);
            submenu.set("active",active);
            submenu.set("masterMenuId",masterMenuId);
            submenu.set("isTargetSelf",isTargetSelf);
            await submenu.save();
            return res.status(200).send(helper.ResponseData(400,"Information has been register", null, submenu));
        } catch (error) {
            return res.status(500).send(helper.ResponseData(500,"Error from server", error, null));
        }
    }
    static updateSubMenu  =  async(req:any, res:any)=>{
        try {
            const {id,name, title, ordering, active,masterMenuId,isTargetSelf} =  req.body;
            const menu= await SubMenu.findByPk(id);
            if(!menu){
                return res.status(400).send(helper.ResponseData(400,"Information is required", null,null));
            }
            menu.set('name', name);
            menu.set('ordering',ordering);
            menu.set('title',title);
            menu.set('masterMenuId',masterMenuId);
            menu.set('isTargetSelf',isTargetSelf);
            menu.set('actie',active);
            await menu.save();
            return res.status(200).send(helper.ResponseData(200,"Information has been update", null, menu));
        } catch (error) {
            console.log(error);
            return res.status(500).send(helper.ResponseData(500,"Information error from server", error, null));
        }

    }
    static deleteSubMeny =  async(req:any, res:any)=>{
        const {id} =  req.body;
        if(isUndefined(id)){
            return res.statu(400).send(helper.ResponseData(400,"Id is not defined",null,null));
        }
        const findMenu = await SubMenu.findByPk(id);
        if(!findMenu){
            return  res.status(400).send(helper.ResponseData(400,"Information is required", null,null));
        }
         await findMenu.destroy();
         return res.status(200).send()
    }
    static allSubMenu =  async(req:any, res:any) =>{
        try {
            const showList = await SubMenu.findAll(); 
            if(isEmpty(showList)){
                return res.status(201).status(helper.ResponseData(201,"Information is empty", null,null))
            }
            return res.status(200).send(helper.ResponseData(200, "Submenu list",null, showList));
        } catch (error) {
            return res.status(500).send(helper.ResponseData(500,"Error  from server", error, null));
        }
    }
}