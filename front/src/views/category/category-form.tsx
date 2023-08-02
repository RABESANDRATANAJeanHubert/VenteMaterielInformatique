import { LoadingButton } from "@mui/lab";
import { DialogContent, TextField, DialogActions } from "@mui/material";
import { useFormik } from "formik";
import { Box } from "mdi-material-ui";
import { title } from "process";
import { Category, CreateCategoryInput } from "src/api/category/category-type";

import Yup from "yup";
import BootstrapDialog from "../common/dialog-style";
import BootstrapDialogTitle from "../common/dialog-title";

export type CategoryProps = {
  category: Category;
  close: () => void;
  submit: (input: CreateCategoryInput) => void;
  open: boolean;
  title: string;
  button: string;
  loading: boolean;
};

export const CategoryForm = (props:CategoryProps) => {
  const {category,close,submit,open,button,loading} = props;
  const formik =  useFormik({
    initialValues:{
      id:category.id,
      label:category.label,
      description:category.description
    },
    validationSchema:Yup.object({
      label:Yup.string().max(250).required('Ajouter le label'),
    }),
    onSubmit:(values,helpers)=>{
      try {
        submit(values)
      } catch (error) {
        helpers.setStatus({success:false})
      }
    }
  })

return (
      <BootstrapDialog
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ '& .MuiDialog-paper': { width: '80%' } }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box component="form" noValidate>
            <TextField
              name="label"
              error={!!(formik.touched.label && formik.errors.label)}
              helperText={formik.touched.label && formik.errors.label}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.label}
              fullWidth
              label="Libellé"
              sx={{ my: 1 }}
            />
            <TextField
              name="description"
              error={!!(formik.touched.description && formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
              fullWidth
              label="description de paiement"
              sx={{ my: 1 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <LoadingButton loading={loading} onClick={() => formik.handleSubmit()}>
            {button}
          </LoadingButton>
        </DialogActions>
      </BootstrapDialog>

  )
}
