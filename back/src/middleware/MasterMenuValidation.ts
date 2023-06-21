import Validator from "validatorjs";
import { Rules } from "validatorjs";
import helper from "../Helper/helper";

export const masterValidation = async (req: any, res: any, next: any) => {
  try {
    const { name, icon, ordering, active } = req.body;

    const info = {
      name,
      icon,
      ordering,
      active,
    };
    const list: Validator.Rules = {
      name: "required| max:100",
      icon: "max:10",
      ordering: "min:10",
      active: "min:10",
    };
    const validator = new Validator(info, list);
    if (validator.fails()) {
      return res
        .status(400)
        .send(helper.ResponseData(400, "Information is required", null, null));
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .send(
        helper.ResponseData(500, "Information from server error", error, null)
      );
  }
};
