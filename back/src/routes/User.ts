const  express =  require('express');
const routeUser = express.Router();
import {signup} from '../controller/UserController';
routeUser.post('/signup',signup);
export default routeUser;