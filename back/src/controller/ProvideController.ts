import { isEmpty, isUndefined } from "lodash";
import helper from "../Helper/helper";
import { Provider } from "../db/models/Provider";

export const add = async(req:any, res:any)=>{
    const name= req.body.name || req.params.name || req.query.name;
    const location = req.body.location || req.params.location || req.query.location;
    if(isUndefined(name) || isUndefined(location) || isEmpty(name) || isEmpty(location)){
        return res.status(400).send(helper.ResponseData(400,"Information requis", null,null));
    }
    try {
    const provider = new Provider(); 
    provider.set('name',name);
    provider.set('location',location);
    await provider.save();
    return res.status(200).send(helper.ResponseData(200,"Information ajouter avec succes",null,provider));
    } catch (error) {
        console.log(error);
        return res.status(500).send(helper.ResponseData(500,"Erreur de  serveur",error,null))
    }
}
 export const  update = async(req:any,res:any)=>{
    const id   =  req.body.id || req.params.id || req.query.id;
    const name = req.body.id || req.paramas.id || req.query.id;
    const location = req.body.location || req.params.location || req.query.location;
    const checkId = await Provider.findByPk(id);
    if(!checkId){
        return res.status(400).send(helper.ResponseData(400,"Impossible de modifier le fournisseur",null,null));
    }
    try {
        checkId.set('name',name);
        checkId.set('location',location);
        await checkId.save();
        return res.status(200).send(helper.ResponseData(200,"Information modifier avec succes",null,{data:checkId}))
    } catch (error) {
        console.log(error);
        return res.status(500).send(helper.ResponseData(500,"Une erreur s\'est produit dans le serveur",error, null));
    }
 }

 export const destroy =  async(req:any, res:any) =>{
    const id =  req.body.id || req.params.id || req.query.id;
    if(isUndefined(id) || isEmpty(id)){
        return res.status(400).send(helper.ResponseData(400,"Une erreur s\'est produit dans le serveur",null,null));
    }

        try {
            const data = await Provider.findByPk(id);
            if(!data){
                return res.status(400).send(helper.ResponseData(400,"Impossible de suprimer la liste fournisseur", null,null));
            }
            await data.destroy();
             return res.status(200).send(helper.ResponseData(200,"Information a ete supprimer avec succes",null,{data:data}));
        } catch (error) {
            console.log(error);
            return res.status(500).send(helper.ResponseData(500,"Un erreur s\'est produit dans le serveur",error,null));
            
        }
 }