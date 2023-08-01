 export type Login  = {
  username:string;
  password:string;
}

export type CreateLogin = Omit<Login,'id'>
export  type UpdateLogin = Omit<Login,'createdAt'|'updatedAt'>

export type AddActionLogin = {
  type:string;
payload:Login;
}

export type UpdateActionLogin = {
  type:string;
  payload:Login;
}
