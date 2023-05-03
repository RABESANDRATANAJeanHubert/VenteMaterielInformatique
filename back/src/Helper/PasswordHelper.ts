

const bcrypt =  require('bcrypt');

const hashPassword =  async(password:string):Promise<string>=> {
    const cryptPass =  await bcrypt.hash(password,10)
    return cryptPass;
}

const checkPassword = async(password:string, hashpassword:string):Promise<string> =>{
    //compare password
    const compare = await bcrypt.compare(password,hashPassword);
   return compare;
}
export default {hashPassword,checkPassword}