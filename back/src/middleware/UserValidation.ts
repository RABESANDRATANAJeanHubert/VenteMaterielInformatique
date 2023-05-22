import Validator from "validatorjs";
import helper from "../Helper/helper";
import User from "../db/models/User";

const registerValidation = async (req: any, res: any, next: any) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    const rules: Validator.Rules = {
      firstName: 'required|string|max:50',
      lastName: 'required|max:50',
      email: 'required|email',
      password: 'required|min:8',
    };
    let validator = new Validator(data, rules);
    if (validator.fails()) {
      return res
        .status(400)
        .send(
          helper.ResponseData(
            400,
            "Bad request, check your  field",
            validator.errors,
            null
          )
        );
    }

    const user = await User.findOne({
      where: { email: data.email },
    });
    if (user) {
      return res
        .status(400)
        .send(
          helper.ResponseData(
            400,
            "Bad request, check your field",
            "Mail is used, find another ",
            null
          )
        );
    }
    next();
  } catch (error) {

    return res.status(400).send(helper.ResponseData(400,"Server Error",error,null))
  }
};



export default registerValidation;
