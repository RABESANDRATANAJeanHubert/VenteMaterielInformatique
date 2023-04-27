const  express =  require('express');
const routeRole = express.Router();
import {getRoles, addRoles, updateRole, deleteRole} from '../controller/RolesController';
routeRole.get('/',getRoles);
routeRole.post('/add',addRoles);
routeRole.put('/update/:id', updateRole);
routeRole.delete('/delete/:id',deleteRole);
export default  routeRole
