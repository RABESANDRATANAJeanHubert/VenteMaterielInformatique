const  express =  require('express');
const routeUser = express.Router();
import { register, userLogin } from "../controller/UserController";
import UserValidation  from "../middleware/UserValidation"
routeUser.post("/signup", UserValidation,register);
routeUser.post("/signin",userLogin);

export default routeUser;