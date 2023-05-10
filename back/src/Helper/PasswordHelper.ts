

const bcrypt =  require('bcrypt');

const hashPassword =  async(password:string):Promise<string>=> {
    const cryptPass =  await bcrypt.hash(password,10)
    return cryptPass;
}

async function checkPassword(password:string,hashpassword:string) {
    //compare password
    const compare = await bcrypt.compare(password,hashPassword);
   return compare;
}
export default {hashPassword,checkPassword}