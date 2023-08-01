const express = require("express");
const routeRole = express.Router();

import { RoleController } from "../controller/RolesController";
import { authenticate } from "../middleware/Authentication";
import { RoleValidation } from "../middleware/RoleValidation";
routeRole.get("/", RoleController.lists);
routeRole.post("/add", RoleValidation, RoleController.add);
routeRole.put("/update/:id", RoleController.update);
routeRole.delete("/delete/:id", RoleController.delete);
export default routeRole;
