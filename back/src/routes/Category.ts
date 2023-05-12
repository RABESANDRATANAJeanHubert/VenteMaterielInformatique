import { CategoryController } from "../controller/CategoryController";

const express = require('express');
const routeCategory = express.Router();
routeCategory.post('/add',CategoryController.add);
routeCategory.get('/',CategoryController.categoryList);
routeCategory.put('/:id',CategoryController.update);
routeCategory.delete('/:id',CategoryController.delete);