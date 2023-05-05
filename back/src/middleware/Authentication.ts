import helper from "../Helper/helper"

export const authenticate =  async(req:any,res:any,next:any)=>{
    try {
        const authToken =  req.headers["authorization"];
        const token =  authToken && authToken.split(" ")[1];
        if(token == null){
            return res.status(400).send(helper.ResponseData(400,"Token unhautorized",null,null));
           
        }
        const result   = await   helper.extractToken(token!);
        next();
    } catch (error) {
        return res.status(500).send(helper.ResponseData(500,'Server error',error,null))
    }
}

