import { isUndefined } from "lodash";
import helper from "../Helper/helper";
import SubMenu from "../db/models/SubMenu";

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
    static updateSubMenu  =  async()=>{

    }
    static deleteSubMeny =  async(req:any, res:any)=>{

    }
    static allSubMenu =  async(req:any, res:any) =>{

    }
}