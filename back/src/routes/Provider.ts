import { ProviderController } from "../controller/ProviderController";

const express =  require('express');
const routeProvider =  express.Router();

routeProvider.post('/add',ProviderController.add);

export default routeProvider;