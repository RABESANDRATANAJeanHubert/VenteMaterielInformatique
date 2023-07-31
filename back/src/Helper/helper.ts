import jwt = require("jsonwebtoken");
import { conf } from "../config/environnement";
import { UserData } from "../types";
const env = conf();

const ResponseData = (
  status: number,
  message: string | null,
  error: any | null,
  data: any | null
) => {
  if (error != null && error instanceof Error) {
    const response = {
      status: status,
      message: error.message,
      errors: error,
      data: null,
    };
    return response;
  }
  const res = {
    status,
    message,
    errors: error,
    data: data,
  };
  return res;
};
const generateToken = (data: any): string => {
  const secretKey = `${process.env.KEY_TOKEN}`;
  const token = jwt.sign(data as string, secretKey, { expiresIn: "10m" });
  return token;
};

const refrechToken = async (data: any): Promise<string> => {
  const secretKey = `${env.REFRECH_TOKEN}`;
  const refToke = jwt.sign(data, secretKey, { expiresIn: "1d" });
  return refToke;
};

const extractToken = async (token: string): Promise<UserData | null> => {
  try {
    const secretKey = `${env.KEY_TOKEN}`;
    let resData: null = null;
    const res = jwt.verify(token, secretKey, (error: any, decoded: any) => {
      if (error) {
        return resData;
      } else {
        return decoded;
      }
    });
    if (resData) {
      const result: UserData = <UserData>resData;
      return result;
    }
    return null;
  } catch (error: any) {
    throw "Une erreur s'est produit dans le server";
  }
};
export default { ResponseData, generateToken, refrechToken, extractToken };
