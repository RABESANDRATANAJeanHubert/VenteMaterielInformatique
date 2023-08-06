import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "./category-type";
import axios from "axios";

export const getCategories = createAsyncThunk('facture/getCategories',()=>{
  return new Promise<Category>((resolve,reject)=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE}category`).then((response)=>{
      console.log(response.data)
      resolve(response.data)
    }).catch((erorr)=>{
      reject(erorr)
    })
  })
})
