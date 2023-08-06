import Head from 'next/head';
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Card,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  LinearProgress,
} from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'src/api/category/category-list';
import { CategoryCard } from 'src/views/category/category-card';
import { Category } from 'src/api/category/category-type';
import { RootState, appDispatch } from 'src/store';
import { CreateCategoryForm } from 'src/views/category/category-create';

type UpdateDialogState = { data?: Category; open: boolean };

const Page = () => {
  //Get companies list from root state
  const category = useSelector((state: RootState) => state.category.data);
  const loading = useSelector((state: RootState) => state.category.loading);

  const [updateDialog, setOpen] = useState<UpdateDialogState>({
    data: undefined,
    open: false,
  });

  const handleClickOpen = (data: Category) => {
    setOpen({ data, open: true });
  };
  const handleClose = () => {
    setOpen({ data: undefined, open: false });
  };
  const dispatch = useDispatch<appDispatch>();

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (category.length <= 2) dispatch(getCategories());
  }, [category.length, dispatch]);


  return (
    <>
      <Head>
        <title>Sociétés | CMPS</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Typography variant="h6">categorie</Typography>
              <CreateCategoryForm />
            </Stack>
            <Card sx={{ p: 2 }}>
              <OutlinedInput
                fullWidth
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Chercher ..."
                startAdornment={
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <MagnifyingGlassIcon />
                    </SvgIcon>
                  </InputAdornment>
                }
                sx={{ maxWidth: 500 }}
              />
            </Card>
            {loading && (
              <Box sx={{ width: '100%' }}>
                <LinearProgress />
              </Box>
            )}
            {category.length > 0 && (
              <Grid container display="flex" gap={2}>
                {category.map((ss:any, index:any) => (
                  <CategoryCard
                    key={index}
                    edit={handleClickOpen}
                    category={ss}
                  />
                ))}
              </Grid>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

// Page.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page;
