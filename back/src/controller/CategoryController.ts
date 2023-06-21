import { isEmpty, isUndefined } from "lodash";
import helper from "../Helper/helper";
import Category from "../db/models/Category";

export class CategoryController {
    static add = async(req:any, res:any)=>{
        try {
            const {label,description} =  req.body;
       
            if(isUndefined(label) || isEmpty(label)){   
                return res.status(400).send(helper.ResponseData(400, "Client is not defined", null, null));
            }
            const category  =  new Category()
            console.log(category);
            category.set('label', label);
            category.set('description',description);
            await category.save();
            return res.status(200).send(helper.ResponseData(200,"Category has been created", null, category))
        } catch (error) {
            return res.status(500).send(helper.ResponseData(500, "Server Erro", error, null))
        }
    }
    static categoryList =  async(req:any,res:any) => {
        try {
            const category = await Category.findAll();
            if(isEmpty(category)){
                return res.status(201).send(helper.ResponseData(201,"Information is empty", null, category))
            }
            return res.status(200).send(helper.ResponseData(200, "Category list", null, category));
        } catch (error) {
                return res.status(500).send(helper.ResponseData(500, "Error from server , please wait  a few minute", error, null));
        }
    }

    static update = async(req:any, res:any) =>{
        const id = req.body.id || req.params.id || req.query.id;
        const label =  req.body.label || req.params.label || req.query.label;
        const description=  req.body.description || req.params.description || req.query.description;
        try {
            const category =  await Category.findByPk(id);
            console.log(category);
            if(!category){
                return res.status(400).send(helper.ResponseData(400, "Identifiant introuvable", null, null));
            }
           category.set('label',label);
           category.set('description',description);
            await category.save();
            return res.status(200).send(helper.ResponseData(200,"Information has been updates",null, category));
        } catch (error) {
            return res.status(500).send(helper.ResponseData(500, "Error from server, please wait for a moment", error, null));
        }
    }

    static delete =  async(req:any,res:any) =>{
       try {
        const {id} = req.body;
        if(isUndefined(id)){
            return res.status(400).send(helper.ResponseData(400,"Identifiant is not defined", null, null));
        }
    const cateory = await Category.findByPk(id);
    if(!cateory){
        return res.status(400).send(helper.ResponseData(400,"Infromation invalid",null, null));
    }
    await cateory.destroy();
    return res.status(400).send(helper.ResponseData(200,"Category has been delete", null, null))
       } catch (error) {
        return res.status(500).status(helper.ResponseData(500,"Error from server, please reload", error,null))
       }
    }

    static getCategoryByName = async(req:any, res:any) => {
        const name = req.paramas.name ;
        try {
            if(isUndefined(name) || isEmpty(name)){
                return res.status(400).send(helper.ResponseData(400,"Information is required", null, null));
            }
            const category  =  await Category.findOne(name);
            if(!category){
                return res.status(400).send(helper.ResponseData(400,"name is not defined", null, null));
            }
            return res.status(200).send(helper.ResponseData(200, "ok" , null, category));
        } catch (error) {
            return res.status(500).send(helper.ResponseData(500,"Error from sever", error, null))
        }
    }

}