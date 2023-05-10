import { isEmpty, isNull, isUndefined } from "lodash";
import helper from "../Helper/helper";
import { error } from "console";
import { Client } from "../db/models/Client";


export class ClientController {
  static createClient = async (req: any, res: any) => {
    const { name, lastName, email, address, phone } = req.body;
    if (isUndefined(email) || isUndefined(phone) || isUndefined(name) || isUndefined(lastName) || isUndefined(address)) {
      return res
        .status(400)
        .send(
          helper.ResponseData(400, "Information required", null, null)
        );
    }
    try {
      const client = await Client.create({ ...req.body });
      return res
        .status(200)
        .send(helper.ResponseData(200, "Client has been  add ", null, client));
    } catch (error) {
      return res
        .status(500)
        .send(
          helper.ResponseData(
            500,
            "Error into  server, please wait minute",
            error,
            null
          )
        );
    }
  };

  static updateClient = async (req: any, res: any) => {
    try {
      const id = res.body.id || req.params;
      id || req.query.id;
      const name = req.body.name || req.params.name || req.query.name;
      const lastName = req.body;
      lastName || req.params.lastName || req.query.lastName;
      const email = req.body.email || req.params.email || req.query.email;
      const address =
        req.body.address || req.params.address | req.query.address;
      const phone = req.body.phone || req.params.phone || req.query.phone;
      if (
        isEmpty(email) ||
        isUndefined(email) ||
        isEmpty(phone) ||
        isUndefined(phone)
      ) {
        return res
          .status(400)
          .send(helper.ResponseData(400, "Information required", error, null));
      }
      const client: Client | null = await Client.findByPk(id);
      if (!client) {
        return res
          .status(400)
          .send(
            helper.ResponseData(
              400,
              "Identifiant  for client is not found",
              error,
              null
            )
          );
      }

      client.name = name;
      client.lastName = lastName;
      client.email = email;
      client.address = address;
      client.phone = phone;
      client.save();
      return res
        .status(200)
        .send(helper.ResponseData(200, "Client has been update", null, client));
    } catch (error) {
      return res
        .status(500)
        .send(helper.ResponseData(500, "Server error", error, null));
    }
  };
  static deleteClient = async (req: any, res: any) => {
    try {
      const { id } = req.body;
      if (isUndefined(id)) {
        return res
          .status(400)
          .send(helper.ResponseData(400, "Client id is required", null, null));
      }
      const client = await Client.findByPk(id);
      if (!client) {
        return res
          .status(400)
          .send(helper.ResponseData(400, "identifiant incorrect", null, null));
      }
      await client.destroy();
      return res
        .status(200)
        .send(
          helper.ResponseData(
            200,
            "Client has been delete successfuly",
            null,
            null
          )
        );
    } catch (error) {
      return res
        .status(500)
        .send(helper.ResponseData(500, "Server Error", error, null));
    }
  };

  static clientBynme = async (req: any, res: any) => {
    try {
        const {name}  = req.params.name ;
        const client =  await Client.findOne({where:{name:name}}) 
        if(isNull(client)){
            return res.status(201).send(helper.ResponseData(201,"Client is empty", null,null));
        }
        return res.status(200).send(helper.ResponseData(200,"", null,client));
    } catch (error) {
        return res.status(500).send(helper.ResponseData(500, "Server error", error,null));
    }
  };

  static getClient = async(req:any, res:any) =>{

try {
    const client = await Client.findAll();
    if(isEmpty(client)){
        return res.status(400).send(helper.ResponseData(400,"Information is empty, please fill in the black", null,null));
    }

    return res.status(200).send(helper.ResponseData(200, "  Client information", null, client));

} catch (error) {
    return res.status(500).send(helper.ResponseData(500,"Error from server",error,null));
}  
}
}
