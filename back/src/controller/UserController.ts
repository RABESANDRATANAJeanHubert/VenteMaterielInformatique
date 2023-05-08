import { json } from "sequelize";
import helper from "../Helper/helper";
<<<<<<< HEAD
import User from '../db/models/User';
import { isUndefined } from 'lodash';
import { error } from 'console';
import PasswordHelper from '../Helper/PasswordHelper';
const bcrypt =  require('bcrypt');
=======
import User from "../db/models/User";
import { isUndefined } from "lodash";
import { error } from "console";
import PasswordHelper from "../Helper/PasswordHelper";
import cookie = require('cookie')
const bcrypt = require("bcrypt");
>>>>>>> b41c6ce32bf11b87e2d3e52353d70cbc13055d14

/**
 * Reqs register
 * @param req
 * @param res
 * @returns
 */
export const register = async (req: any, res: any) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (
      isUndefined(firstName) ||
      isUndefined(lastName) ||
      isUndefined(email) ||
      isUndefined(password)
    ) {
      return res.status(400).json(helper.ResponseData(400, "", error, null));
    }
    const pwdcrpt = await PasswordHelper.hashPassword(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: pwdcrpt,
      active: true,
      verified: true,
      roleId: 1,
    });
<<<<<<< HEAD
    return res.status(200).send(helper.ResponseData(200,"Created",null,user))
    } catch (error:any) {
    return res.status(500).send(helper.ResponseData(500,"",error,null))
=======
    return res
      .status(200)
      .send(helper.ResponseData(200, "Created", null, user));
  } catch (error: any) {
    return res
      .status(500)
      .send(helper.ResponseData(500, "Error from server", error, null));
>>>>>>> b41c6ce32bf11b87e2d3e52353d70cbc13055d14
  }
};

export const userLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res
        .status(400)
        .send(helper.ResponseData(400, "Unhautorize", error, null));
    }
    const pwd = bcrypt.compare(password, user.password);
    const data = {
      firstName: user.firstName,
      lasteName: user.lastName,
      email: user.email,
      active: user.active,
      verified: user.verified,
      roleId: user.roleId,
    };
    const token = await helper.generateToken(data);
    const userResponse = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      active: user.active,
      verified: user.verified,
      roleId: user.roleId,
      token: token,
    };

    if (!pwd) {
      return res
        .status(400)
        .send(helper.ResponseData(400, "Password incorrect", null, null));
    }
    return res
      .status(200)
      .send(helper.ResponseData(200, "Ok", null, userResponse));
  } catch (error: any) {
    return res
      .status(500)
      .send(helper.ResponseData(500, "Server error", error, null));
  }
};



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

