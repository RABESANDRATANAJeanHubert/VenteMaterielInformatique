const  express =  require('express');
const routeRole = express.Router();

import {getRoles, addRoles, updateRole, deleteRole} from '../controller/RolesController';
import { authenticate } from '../middleware/Authentication';
import { RoleValidation } from '../middleware/RoleValidation';





routeRole.get('/',getRoles);
routeRole.post('/add',RoleValidation,addRoles);
routeRole.put('/update/:id', updateRole);
routeRole.delete('/delete/:id',deleteRole);
export default  routeRole
