
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
      roleId: 1 ,
      
    });
    console.log(user);
    return res.status(200).send(helper.ResponseData(200,"Created",null,user))
    } catch (error:any) {
    return res.status(500).send(helper.ResponseData(500,"Error from server",error,null))
  }
}

export const userLogin =  async(req:any, res:any)=>{
try {
  const {email, password} =  req.body;
  const user = await User.findOne({
    where:{
      email:email
    }
  })
  if(!user){
    return res.status(400).send(helper.ResponseData(400,"Unhautorize",error,null));
  } 
  const pwd = bcrypt.compare(password,user.password);
  const data =  {
    firstName:user.firstName,
    lasteName:user.lastName,
    email:user.email,
    active:user.active,
    verified:user.verified,
    roleId:user.roleId
  }
  const token = await helper.generateToken(data);
  const userResponse = {
    firstName: user.firstName,
    lastName:user.lastName,
    email:user.email,
    active:user.active,
    verified:user.verified,
    roleId:user.roleId,
    token:token
  } 

  if(!pwd){
    return res.status(400).send(helper.ResponseData(400,'Password incorrect',null, null));
  }
  
  return res.status(200).send(helper.ResponseData(200,'Ok', null, userResponse));
} catch (error:any) {
  return res.status(500).send(helper.ResponseData(500,'Server error',error, null))
}
}

// export const RefreshToken =  async(req:any, res:any)=>{
//   try {
//     const refToken = req.cookies?.refreshToken;
//     if(!refToken){
//       return res.status(400).send(400,'Token Unhautorized',null,null);
//     }
//     const decodeUser = await helper.extractToken(refToken);
//     if(!decodeUser || isUndefined(decodeUser)){
//       return res.status(400).send(400,"Token code is incorrect ",null,null);
//     }
//     const token = await helper.generateToken(decodeUser);
//     const userResult  = {
//       firstName: decodeUser.firstName,
//       lastName:decodeUser.lastName,
//       email:decodeUser.email,
//       active:decodeUser.active,
//       verified:decodeUser.verified,
//       roleId:decodeUser.roleId,
//       token:token
//     }
//     return res.status(200).send(helper.ResponseData(200,"ok",null,userResult));
//   } catch (error) {
//     return res.status(500).send(500,helper.ResponseData(500,"Server error",error,null))
//   }
// }