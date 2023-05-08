import { isNull, isUndefined } from 'lodash';

import helper from "../Helper/helper";

export const authenticate =  (req: any, res: any) => {
  try {

    const authToken:string = req.headers.authorization || undefined;
    const token = authToken && authToken.split(" ")[1];   
    if (token[0].toLowerCase() !== "bearer") {
        return res.status(400).send(helper.ResponseData(400,"Unauthorized -- Your API key or bearer token is wrong or missing.",null,null));
    }
    const result =  helper.extractToken(token);
  return res.status(200).send(helper.ResponseData(200,"ok",null,result));

  } catch (error) {
    return res
      .status(500)
      .send(helper.ResponseData(500, "Server error", error, null));
  }
};
