const  express =  require('express');
const routeRole = express.Router();

import {getRoles, addRoles, updateRole, deleteRole} from '../controller/RolesController';
import { authenticate } from '../middleware/Authentication';





routeRole.get('/',authenticate,getRoles);
routeRole.post('/add',addRoles);
routeRole.put('/update/:id', updateRole);
routeRole.delete('/delete/:id',deleteRole);
export default  routeRole
