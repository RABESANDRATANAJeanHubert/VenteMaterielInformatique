import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const removeCategoryThunk =  createAsyncThunk('category/removeCategoryThunk',(infos:string)=>{
  return new Promise<any>((resolve,reject)=>{
    axios.post(`${process.env}/remove/add`,{
      infos,

    }).then((response)=>{resolve(response.data)}).catch((error)=>{
      reject(error);
    })
  })
})
