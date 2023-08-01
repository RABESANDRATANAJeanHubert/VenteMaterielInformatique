// import only categoryController
import { CategoryController } from "../controller/CategoryController";
import { categoryValidation } from "../middleware/CategoryValidation";
// router
const express = require('express');
const routeCategory = express.Router();
// use router
routeCategory.post('/add',CategoryController.add);
routeCategory.get('/',CategoryController.list);
routeCategory.put('/:id',CategoryController.update);
routeCategory.delete('/:id',CategoryController.delete);

export default routeCategory;