import { ClientController } from "../controller/ClientController";
import { clientValidation } from "../middleware/ClientValidation";


const express =  require('express');
const clientRoute =  express.Router();

clientRoute.post('/add',clientValidation,ClientController.create);
clientRoute.get('/',ClientController.getAllInformation);
clientRoute.put('/:id',ClientController.update);
clientRoute.delete('/:id',ClientController.delete);
export default clientRoute;
