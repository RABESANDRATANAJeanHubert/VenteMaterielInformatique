import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from './api/article/article-slice'
import CategoryReducer from './api/category/category-slice'

const store   =  configureStore({
reducer:{
article:ArticleReducer,
category:CategoryReducer
}
})

export default store;
export type RootState =  ReturnType< typeof store.getState>
export type appDispatch =  typeof  store.dispatch;
