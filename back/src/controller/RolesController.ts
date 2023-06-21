import { json } from "sequelize";
import { identity, isUndefined } from "lodash";
import { Response, Request } from "express";
import Role from "../db/models/Role";
import helper from "../Helper/helper";
/**
 * Reqs get roles
 * @param req 
 * @param res 
 * @returns  
 */
export const getRoles = async (req: any, res: any) => {
  try {
    const role= await Role.findAll();
    
    if(!role){
      return res.status(400).send(helper.ResponseData(400,"Information not found",null,null));
    }
   return res.status(200).send(helper.ResponseData(200,"Role list",null,role));
  } catch (error) {
    return res.status(500).send(helper.ResponseData(500,"Error from server",error, null));
  }
};

/**
 * Reqs add roles
 * @param req 
 * @param res 
 * @returns  
 */

export const addRoles = async (req: any, res: any) => {
  try {
    const roleName = req.body.roleName || req.query.roleName;
    const active = req.body.active || req.query.active || req.params.active;
    console.log(req.body);
    if (isUndefined(roleName) || isUndefined(active)) {
      return res.status(400).json({ message: "Information incorrect" });
    }
    const role = new Role()
    role.set('roleName', roleName);
    role.set('active',active);
    await role.save();
    return res.status(200).send(helper.ResponseData(200,"Information créer avec succè", null,role))
  } catch (error) {
    return res
      .status(500).send(helper.ResponseData(500,"Error from server", error, null));
  }
};

export const updateRole = async (req: any, res: any): Promise<Response> => {
  const roleName =
    req.body.roleName || req.query.roleName || req.params.roleName;
  const active = req.body.roleName || req.query.active || req.params.active;
  const id = req.body.id || req.query.id || req.params.id;
  try {
    if (isUndefined(roleName) || isUndefined(active)) {
      return res.status(400).json({ message: "Information  incorrect" });
    }
    const role: Role | null = await Role.findByPk(id);
    if (!role) {
      return res.status(400).json({ message: "Identifiant incorrect" });
    }
    role.set('roleName',roleName);
    role.set('active',active);
    await role.save();
    return res.status(200).json({ message: "Mise a jour avec succè" , data:role , success:true});
  } catch (error) {
    return res.status(400).json({ error });
  }
};
/**
 * Reqs delete role
 * @param req 
 * @param res 
 * @returns  
 */

export const deleteRole = async (req: any, res: any) => {
  const id = req.body.id || req.query.id || req.params.id;
  try {
    if (isUndefined(id)) {
      return res.status(400).json({
        message: "Identifiant incorrect ",
      });
    }
    const findId = await Role.findByPk(id);
    const destory = findId?.destroy();
    if (!destory) {
      return res
        .status(400)
        .json({ message: "Impossible de supprimer le client" });
    }
    return res
      .status(200)
      .json({ message: "Supprimer avec succè", data: destory });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Une erreur s'est produit dans le serveur" });
  }
};

