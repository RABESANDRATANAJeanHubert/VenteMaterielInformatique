import Validator from "validatorjs";
import helper from "../Helper/helper";
import { Client } from "../db/models/Client";

export const clientValidation = async (req: any, res: any, next: any) => {
    const { name, lastName, email, phone, address } = req.body;
    try {
      const data = {
        name,
        lastName,
        email,
        phone,
        address
      };
      const rules: Validator.Rules = {
        name: "required|string|max:50",
        lastName: "required|max:50",
        email: "required|email",
        phone: "required|max:10",
        address:'required|max:250'
      };
      let validator = new Validator(data, rules);
      if (validator.fails()) {
        return res
          .status(400)
          .send(
            helper.ResponseData(
              400,
              "Bad request",
              null,
              null
            )
          );
      }
     const  checkEmeil = await Client.findOne({
        where:{email:data.email}
      });

      if(checkEmeil){
        return res
        .status(400)
        .send(
          helper.ResponseData(
            400,
            "Bad request, check your field",
            " email is  used, find another ",
            null
          )
        );
      }
      const clientName = await Client.findOne({
        where: { name:data.name},
      });

      if(clientName){
        return res
        .status(400)
        .send(
          helper.ResponseData(
            400,
            "Bad request, check your field",
            "name is  used, find another ",
            null
          )
        );
      }

      next();
    } catch (error) {
  
      return res.status(400).send(helper.ResponseData(400,"Server Error",error,null))
    }
  };