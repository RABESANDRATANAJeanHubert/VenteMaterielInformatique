import { Login } from "./login-type";


export type State = {
  data:Login[];
  loading:boolean;
  error:string;
}

export const  initialState:State={
data:[],
loading:true,
error:''
}

