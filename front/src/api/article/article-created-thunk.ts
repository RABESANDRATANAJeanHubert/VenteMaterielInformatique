import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article} from "./article-type";
import axios from "axios";

export  const createArticleThunk = createAsyncThunk(
  'article/createArticleThunk',()=>{
    return new Promise<Article>((resolve,reject)=>{
      axios.post(`${process.env.NEXT_PUBLIC_API_BASE}article/add`).then((response)=> {
        console.log(response.data)
        resolve(response.data)}).catch((error)=>{
        console.log(error)
        reject(error)
      })
    })
  }
)
