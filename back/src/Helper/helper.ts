const jwt=   require('jsonwebtoken');
const doEnv =  require('dotenv');
const ResponseData =  (status:number, message:string | null, error: any | null,data:any|null) =>{
        if(error != null && error instanceof Error){
            const response =  {
                status:status,
                message:error.message,
                errors:error,
                data:null
            }
            return response;
        }
        const res = {
            status,
            message,
            errors:error,
            data:data
        }
        return res
}
const generateToken = async(data:any): Promise<string> => {
const token = await jwt.sign(data,process.env.TOKEN as string ,{expiresIn:"10m"});
return token;
}
export default {ResponseData, generateToken}