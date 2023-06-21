import { isUndefined } from "lodash";
import helper from "../Helper/helper";
import Article from "../db/models/Article";

export const addArticle = async(req:any, res:any) => {
    const ArticleName = req.body.articleName || req.params.articleName || req.query.articleName;
    const TVA = req.body.tva || req.params.tva || req.query || req.quey.tva;
    const designation =  req.body.designation || req.parmams.designation || req.query.designation;
    const prix_HTTC = req.body.priHttc || req.params.prxHttc || req.query.prixHttx;
    const categori_id =  req.body.category_id || req.params.category_id ||  req.query.category_id;
    if(isUndefined(ArticleName) || isUndefined(TVA) || isUndefined(prix_HTTC) || isUndefined(categori_id)){
        return res.status(400).send(helper.ResponseData(400,"Information réquis", null,null));
    }
    try {
        const article =  new Article();
        article.set("ArticleName",ArticleName),
        article.set("prix_HTTC",prix_HTTC),
        article.set("designation",designation),
        article.set("TVA",TVA),
        article.set("categori_id",categori_id)
        await article.save();
        return res.status(200).send(200,"Information a été ajouter avec succè",null, {data:article});
    } catch (error) {
        console.log(error);
        return res.status(500).send(helper.ResponseData(500,"Une erreur s\est produit dans le serveur",error,null));    }
}

const onUpdateArticle =  async(req:any, res:any)=>{
    const {id,ArticleName,designation,prix_HTTC,categori_id,TVA,prixUnitaire} =  req.body || req.params || req.query
    if(isUndefined(ArticleName) || isUndefined(TVA) || isUndefined(prix_HTTC) || isUndefined(categori_id)){
        return res.status(400).send(helper.ResponseData(400,"Information réquis", null,null));
    }
    try {
        const checkArticle =  await Article.findByPk(id);
        if(!checkArticle){
            return res.status(400).send(helper.ResponseData(400,"Information introuvable", null,null))
        }
        checkArticle.set("designation",designation),
        checkArticle.set("ArticleName",ArticleName),
        checkArticle.set("TVA",TVA),
        checkArticle.set("prix_HTTC",prix_HTTC),
        checkArticle.set("prix_unitaire",prixUnitaire)
        await checkArticle.save();
        return res.status(200).send(helper.ResponseData(200,"Article modifié avec succès",null,{data:checkArticle}))
    } catch (error) {
        console.log(error)
        return res.status(500).send(helper.ResponseData(500,"Une erreur s\' est produit dans le serveur",error,null))
    }
}