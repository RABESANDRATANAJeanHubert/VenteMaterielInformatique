const  express =  require('express');
const routeUser = express.Router();
import { UserController } from "../controller/UserController";
import UserValidation  from "../middleware/UserValidation"
routeUser.post("/signup", UserValidation,UserController.register);
routeUser.post("/signin",UserController.userLogin);
export default routeUser;