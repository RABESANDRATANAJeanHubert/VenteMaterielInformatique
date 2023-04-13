import { Todos } from './../models/todos';

import { isNull, isUndefined } from 'lodash'
import { where } from "sequelize";
export   const createTodo =  async(req:any, res:any) => {
    const {name, description} =  req.body;
    try {
        if(isUndefined(name)){
            return res.status(400).json({message:"Nom du client est réqui"});
        }
        const todos:Todos | null =  await Todos.create({name:req.body.name, description: req.body.description});
        return res.status(400).json({todos,message:'Information créer avec succè'});
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const getTodoList = async(req:any, res:any)=>{
    const todosList: Array<Todos> = await Todos.findAll();
    if(isNull(todosList)){
        return null
    }
    return res.status(201).json(todosList ? todosList : null  )
}

export const getTodoById = async(req:any, res:any)=>{
    const {id} = req.params;
    if(isNull(id) || isUndefined(id)){
        return res.status(400).json({message:'Identifiant introuvable'});
    }
    
    const singleTodo :Todos | null =  await Todos.findByPk(id);
    if(singleTodo === null){
        return res.status.json({message:'Objet introuvable'});
    }
    return res.status(200).json({singleTodo});
}

export const updateTodo =  async(req:any, res:any) =>{
    const {id} = req.params;
    await Todos.update({...req.body},{ where:{id}});
    const update: Todos | null = await Todos.findByPk(id);
    return  res.status(200).json(update ? update: null , {message:'Donné modifier avec succès'});
}

export const deleteTodo = async(req:any,res:any)=>{
    const {id} =  req.params;
    const deleteTodos: Todos | null = await  Todos.findByPk(id);
    if(isNull(deleteTodos)){
        return null
    }
    await Todos.destroy({where:{id}})
    return  res.satus(200).json({message: 'Information supprimé avec succès',delete:deleteTodos});
}