const  express =  require('express');
const routeUser = express.Router();
import { register } from "../controller/UserController";
import UserValidation  from "../middleware/UserValidation"
routeUser.post("/signup", UserValidation,register);
export default routeUser;