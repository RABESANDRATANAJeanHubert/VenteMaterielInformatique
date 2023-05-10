import { json } from 'sequelize';
import helper from "../Helper/helper";
import User from '../db/models/User';
import { isUndefined } from 'lodash';
import { error } from 'console';
import PasswordHelper from '../Helper/PasswordHelper';
const bcrypt =  require('bcrypt');

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
    return res.status(200).send(helper.ResponseData(200,"Created",null,user))
    } catch (error:any) {
    return res.status(500).send(helper.ResponseData(500,"",error,null))
  }
}

export const userLogin =  async(req:any, res:any)=>{
  const {email, password} =  req.body;
  try {
    const user = await  User.findOne({
      where:{
        email:email
      }
    })
    if(!user){
      return res.status(400).send(400,"Unhauthorized",null,null);
    }
    const comparePassword = await bcrypt.compare(password,user.password)
    if(!comparePassword){
      return res.status(400).send(400,"Password incorrect", error,null);
    }
const dataUser = {
  firstName:user.firstName,
  lastName:user.lastName,
  email:user.email,
  password:user.password,
  roleId:user.roleId,
  active:user.active,
  verified:user.verified
};
const token = helper.generateToken(dataUser);
const responseUser = {
  firstName:user.firstName,
  lastName:user.lastName,
  email:user.email,
  password:user.password,
  roleId:user.roleId,
  active:user.active,
  verified:user.verified,
  token:token
};
    return res.status(200).send(helper.ResponseData(200,"Ok",null,responseUser));
  } catch (error) {
    return res.status(400).send(helper.ResponseData(400,"Server Error",error,null))
  }
}

