import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category, CreateCategoryInput} from './category-type';
import axios from 'axios';

export const createCategoryThunk =  createAsyncThunk('category/createCategory',(info:CreateCategoryInput)=>{
  return new Promise<Category>((resolve,reject)=>{
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE}category/add`, info).then((response)=>{
      console.log(response.data);
      resolve(response.data)}).catch((error)=>{
        console.log(error);
      reject(error);
    })
  })
})
