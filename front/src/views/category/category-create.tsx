import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoryThunk } from "src/api/category/category-create-thunk";
import { CreateCategoryInput } from "src/api/category/category-type";
import { useNotification } from "src/hooks/use-notification";
import {  appDispatch } from "src/store";
import { CategoryForm } from "./category-form";
import { Turkey } from "mdi-material-ui";

export const CreateCategoryForm = ()=>{

  const  dispatch =  useDispatch<appDispatch>();
  const notification  =  useNotification()
  const [open,setOpen] =  useState(false);
    const handleSubmit = (res: Omit<CreateCategoryInput,'id'>)=>{
        dispatch(
          createCategoryThunk({...res,})
        ).then(()=> notification.show({
          message:'Information add',
          severity:'success'
        })).catch(()=> notification.show({
          message:'Error add',
          severity:'error'
        }))
    }

return (
      <>
      <Stack flexDirection="row" justifyContent="flex-end" sx={{ pb: 1 }}>
        <Button size="small" onClick={() => setOpen(true)} startIcon={<Add />}>
          Ajouter une facture
        </Button>
      </Stack>
      <CategoryForm
      close={() => setOpen(false)}
      submit={handleSubmit}
      title="Nouveau facture"
      button={t('add')}
      open={open}
      loading={true}
       category={{
        label: "",
        description: "",
        id: ""
      }}      />
    </>
    )
}
