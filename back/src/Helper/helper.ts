
const jwt=  require('jsonwebtoken');
const dotenv = require('dotenv');
 interface UserData {
    firstName:string;
    lastName:string;
    email:String;
    password:String;
    roleId:Number;
    active:Boolean;
    verified:Boolean,
}
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
const generateToken = async(data:any): Promise<string>=> {
    const token =  await jwt.sign(data,process.env.KEY_TOKEN, { expiresIn: '1h' });
    return token
}

const refrechToken = async(data:any):Promise<string> =>{
    const refToke = await jwt.sign(data,process.env.REFRECH_TOKEN, {expiresIn:'1d'});
    return refToke;
}

const extractToken = async(token:string):Promise<UserData | null>=>{
    const secretKey = process.env.JWT_TOKEN as string;
    let resData: null = null;
    const res =  jwt.verify(token,secretKey,(error:any,decoded:any)=>{
        if(error){
            return resData;
        }
        else{
            return decoded
        }
    })
if(resData){
    const result:UserData = <UserData>(resData);
    return result;
}
return null
}
export default {ResponseData,generateToken,refrechToken,extractToken}