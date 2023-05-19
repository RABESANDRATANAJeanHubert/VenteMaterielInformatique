import { MasteMenuController } from "../controller/MasterMenuController";

const express =  require('express');
const routerMenuMaster = express.Router();
routerMenuMaster.post('/add',MasteMenuController.createMasterMenu);

export default routerMenuMaster;