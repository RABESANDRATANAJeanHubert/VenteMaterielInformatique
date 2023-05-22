import { isEmpty, isUndefined } from "lodash";
import helper from "../Helper/helper";
import MasterMenu from "../db/models/Mastermenu";
import SubMenu from "../db/models/SubMenu";

export class MasteMenuController {
  static createMasterMenu = async (req: any, res: any) => {
    const { name, icon, ordering, active } = req.body;
    if (
      isUndefined(name) ||
      isUndefined(icon) ||
      isUndefined(ordering) ||
      isUndefined(active)
    ) {
      return res
        .status(400)
        .send(helper.ResponseData(400, "Information invalid", null, null));
    }
    try {
      const masterMenu = new MasterMenu();
      console.log(masterMenu);
      masterMenu.set("name", name);
      masterMenu.set("icon", icon);
      masterMenu.set("ordering", ordering);
      masterMenu.set("active", active);
      await masterMenu.save();
      return res
        .status(200)
        .send(
          helper.ResponseData(200, "Menu has been rgister", null, {
            data: masterMenu,
          })
        );
    } catch (error) {
      return res
        .status(500)
        .send(helper.ResponseData(500, "Error from server", error, null));
    }
  };

  static updateMasterMenu = async (req: any, res: any) => {
    const { name, icon, ordering, active, id } = req.body;
    const checksubmenu = await SubMenu.findByPk(id);
    if (!checksubmenu) {
      return res
        .status(400)
        .send(helper.ResponseData(400, "Id is undefined", null, null));
    }
    try {
      checksubmenu.set("name", name);
      checksubmenu.set("icon", icon);
      checksubmenu.set("ordering", ordering);
      checksubmenu.set("active", active);
      await checksubmenu.save();
      return res
        .status(200)
        .send(
          helper.ResponseData(200, "Information has been update", null, {
            dat: checksubmenu,
          })
        );
    } catch (error) {
      return res
        .status(500)
        .send(helper.ResponseData(500, "Error from server", error, null));
    }
  };

  static getAllMasterMenu = async (req: any, res: any) => {
    try {
      const list = await SubMenu.findAll();
      if (isEmpty(list)) {
        return res
          .status(400)
          .send(helper.ResponseData(400, "infomtion is  empty", null, null));
      }
      return res
        .statu(200)
        .send(helper.ResponseData(200, "liste de sous-menu", null, list));
    } catch (error) {
      return res
        .status(500)
        .send(helper.ResponseData(500, "Error from server", error, null));
    }
  };
  static deleteMasterMenu = async (req: any, res: any) => {
    const { id } = req.body.id;
    if (isUndefined(id)) {
      return res
        .status(400)
        .send(helper.ResponseData(400, "Id is required", null, null));
    }
    try {
      const findInd = await MasterMenu.findByPk(id);
      if (!findInd) {
        return res
          .statu(400)
          .send(helper.ResponseData(400, "Check your identifiant", null, null));
      }
      await findInd.destroy();
      return res
        .status(400)
        .send(
          helper.ResponseData(
            200,
            "Information has been destroyed",
            null,
            findInd
          )
        );
    } catch (error) {
      return res
        .status(500)
        .send(helper.ResponseData(500, "Error from server", error, null));
    }
  };
}
