import  configs  from "dotenv";
configs.config();
const dotEnv =  process.env;
export const conf =  ()=>{
    return dotEnv;
}