import { createSlice } from "@reduxjs/toolkit";
import { Article, ArticleAddAction } from "./article-type";
import { createArticleThunk } from "./article-created-thunk";

 export interface  State  {
  data:Article[];
  error:string;
  loading:boolean;
}


export const initialState:State = {
data:[],
error:'',
loading:true
}

const add =  (state:State,action:ArticleAddAction) =>{
  if(state.data.findIndex((i)=> i.id ===  action.payload.id)>= 0) return;
   state.data.unshift(action.payload);
}

// const update  =  (state:State,action:ArticleUpdateAction)=>{
//   const index =  state.data.findIndex((i)=> i.id === action.payload.id);
//   if(index> -1) state.data[index] =  action.payload
// }

// const remove =  (state:State, action:ArticleDeleteAction)=>{
//   const index =  state.data.findIndex((i)=> i.id === action.payload);
//   if(index >-1) state.data.slice(Number(action.payload));
// }


const slice =  createSlice({
  name:'article',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder

    // ADD ARTICLE
    .addCase(createArticleThunk.pending,(state)=>{
      state.loading =  false;
    })
    .addCase(createArticleThunk.fulfilled,(state,action)=>{
      state.loading =  false,
      state.error =  '',
      add(state,action)
    })
    .addCase(createArticleThunk.rejected,(state,action)=>{
      state.data = [],
      state.loading  =  false,
      state.error = action.error.message || ''
    })
  }
})

export default slice.reducer;
