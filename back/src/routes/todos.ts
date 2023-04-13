import  { Router } from "express";
import { createTodo, getTodoById,updateTodo,getTodoList,deleteTodo } from "../controller/todo";  

const router =  Router();
router.post("/add",createTodo);
router.get("/",getTodoList);
router.get('/:id',getTodoById);
router.put("/update/:id",updateTodo);
router.delete('/delete/:id',deleteTodo);

export default router;