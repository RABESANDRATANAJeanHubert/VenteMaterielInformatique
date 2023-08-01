export type Category = {
  label:string;
  description:string;
  id:string;
}

export  type CreateCategoryInput = Omit<Category,'id'>
export type UpdateCategory = Omit<Category,'createdAt'|'updatedAt'>

export type CategoryAddAction = {
  type:string;
  payload:Category;
}

export type CategoryUpdateAction = {
  type:string;
  payload:Category;
}

export type CategoryDeleteAction = {
  type:string;
  payload:string;
}
