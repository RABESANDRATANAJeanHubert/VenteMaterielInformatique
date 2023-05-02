import { json } from 'sequelize';
import helper from "../Helper/helper";
import User from '../db/models/User';
import { isUndefined } from 'lodash';
import { error } from 'console';
import PasswordHelper from '../Helper/PasswordHelper';


/**
 * Reqs register
 * @param req 
 * @param res 
 * @returns  
 */
export const  register =  async(req:any, res:any) => {
  try {
    const {firstName, lastName, email, password} = req.body;
    if(isUndefined(firstName) || isUndefined(lastName) || isUndefined(email) || isUndefined(password)){
      return res.status(400).json(helper.ResponseData(400,"", error, null));
    }
   const pwdcrpt = await PasswordHelper.hashPassword(password); 
    const user  =  await User.create({
      firstName,
      lastName,
      email,
      password: pwdcrpt,
      active:true,
      verified:true,
      roleId: 1 
    });
    console.log(user);
    return res.status(200).send(helper.ResponseData(200,"Created",null,user))
    } catch (error:any) {
    return res.status(500).send(helper.ResponseData(500,"",error,null))
  }
}

