import { isUndefined } from 'lodash';
import helper from '../Helper/helper';
import { Provider } from './../db/models/Provider';
export class ProviderController {
    static add = async(req:any, res:any) => {
        const name =  req.body.name || req.params.name || req.query.name;
        const location = req.body.location || req.params.location || req.query.location; 
    try {
        if(isUndefined(name) || isUndefined(location)){
            return res.status(400).send(helper.ResponseData(400,"Information invalid", null,null));
        }
        const provider =  new Provider();
        provider.set("name", name);
        provider.set('location', location);
        await provider.save();
        return res.status(200).send(helper.ResponseData(200,"Provider has been add",null ,provider))
    } catch (error) {
        return res.status(500).send(helper.ResponseData(500,"Errror from the server", error,null));
    }
    } 

    static update  =  async(req:any, res:any) =>{
        const id =  req.body.id || req.paramas.id || req.query.id;
        const name  =  req.body.name || req.paramas.name || req.query.name;
        const location =  req.body.location || req.params.location  || req.query.location;
        try {
            if(isUndefined(id) || isUndefined(name)){
                return res.status(400).send(400, 'Information invalid', null,null);
            }
            const provider = await Provider.findByPk(id);
            if(!provider){
                return res.status(400).send(helper.ResponseData(400, 'Invalid for identifiant provider', null,null));
            }   
            provider.set('name',name);
            provider.set('location',location);
            await provider.save();
            return res.status(200).send(helper.ResponseData(200, "Information has been update",null ,provider));
        } catch (error) {
            return  res.status(500).send(helper.ResponseData(500,"Error from server, please wait for a moment", error, null));
        }
    }
}