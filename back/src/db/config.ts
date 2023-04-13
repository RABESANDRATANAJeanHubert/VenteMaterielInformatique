import { Todos } from './../models/todos';
import { Sequelize } from "sequelize-typescript";

export const db = new Sequelize(
    {database:"todos", 
    username:"root", 
    password:"root", 
    host: 'localhost',
    dialect:"mysql",
    logging:false,
    models:[Todos]
  });