import { ClientController } from "../controller/ClientController";

const express =  require('express');
const clientRoute =  express.Router();

clientRoute.post('/add',ClientController.createClient);
clientRoute.get('/',ClientController.getClient);
clientRoute.put('/:id',ClientController.updateClient);
clientRoute.delete('/:id',ClientController.deleteClient);
export default clientRoute;
