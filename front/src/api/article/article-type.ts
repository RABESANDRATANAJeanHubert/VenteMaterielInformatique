export interface  Article {
  id:string;
  designation:string;
  ArticleName:string;
  TVA:number;
  prix_HTTC:number;
  prixUnitaire:number;
}

export  type ArticleCreateInput = Omit<Article,'id'>
export type ArticleUpdate  = Omit<Article,'createdAt' | 'updatedAt'>


export type ArticleAddAction = {
  type:string;
  payload:Article;
}

export type ArticleUpdateAction = {
  type:string;
  payload:Article;
}

export type ArticleDeleteAction = {
  type:string;
  payload:string;
}
