import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category, CreateCategoryInput } from './category-type';
import axios from 'axios';

export const updateCategoryThunk =  createAsyncThunk('category/createCategory',(infos:CreateCategoryInput)=>{
  return new Promise<Category>((resolve,reject)=>{
    axios.post(`${process.env}/category/add`,{
      infos,

    }).then((response)=>{resolve(response.data)}).catch((error)=>{
      reject(error);
    })
  })
})
