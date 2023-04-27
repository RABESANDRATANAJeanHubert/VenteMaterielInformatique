import { json, STRING } from "sequelize";
import { isUndefined } from "lodash";
import User from "../db/models/User";
/**
 * Reqs signup
 * @param req 
 * @param res 
 * @returns  
 */
export const signup = async (req: any, res: any):Promise<Response> => {
  const {
    firstName,
    lastName,
    email,
    roleId,
    password,
    accessToken,
    verified,
    active,
  } = req.body;
  if (
    isUndefined(firstName) ||
    isUndefined(lastName) ||
    isUndefined(email) ||
    isUndefined(password) 
  ) {
    return res.status(400).json({ message: "Information incorrect" });
  }
  try {
    const createUser = await User.create({
      firstName,
      lastName,
      email,
      roleId:1 as unknown as BigInt,
      password,
      accessToken:"TOKEN" as unknown as Text,
      verified:true,
      active:true,
    });
    if (!createUser) {
      return res.status(410).json({ message: "Verifier les données ajoutées" });
    }
    return res
      .status(200)
      .json({ message: "Create", data: createUser, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error, message: "Urreur s'est produit dans le serveur" });
  }
};

