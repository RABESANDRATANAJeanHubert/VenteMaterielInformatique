import { Sequelize } from "sequelize-typescript";
import { conf } from "./environnement";
const env = conf()
const dbName  = env.DB_NAME  as string;
const dbHost  =  env.DB_HOST;
const dbUsername  = env.DB_USERNAME as string;
const dbPassword =  env.DB_PASSWORD;
const dialect = "mysql";
const  seqlzConnexion =  new Sequelize(dbName,dbUsername,dbPassword,{host:dbHost, dialect:dialect});
export default  seqlzConnexion;