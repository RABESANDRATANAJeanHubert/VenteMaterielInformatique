import { Sequelize } from "sequelize";


const dotEnv  =  require('dotenv');
dotEnv.config();

const dbName =  process.env.DB_NAME as string;
const dbUserName = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST ;
const  dbDialect = 'mysql';

const connection =  new Sequelize(dbName,dbUserName,dbPassword,{
    host:dbHost,
    dialect:dbDialect
})

export default  connection;