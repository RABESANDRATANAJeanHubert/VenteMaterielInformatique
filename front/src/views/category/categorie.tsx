import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appDispatch, RootState } from 'src/store'
import { getCategories } from 'src/api/category/category-list'

import { CreateCategoryForm } from 'src/views/category/category-create'

const CategoryList = () => {
  const category = useSelector((state: RootState) => state.category)
  const loading = useSelector((state: RootState) => state.category.loading)
  console.log(category)
  const dispatch = useDispatch<appDispatch>()

  useEffect(() => {
    if (category.data.length <= 2) dispatch(getCategories())
    console.log(category.data)
  }, [category.data, category.data.length, dispatch])

  return (
    <>
      <Head>
        <title>CMPS | Utilisateur</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 2
        }}
      >
        <Container maxWidth='xl'>
          <Stack spacing={3}>
            <Stack direction='row' justifyContent='space-between' spacing={4}>
              <Typography variant='h6'>
                <CreateCategoryForm />
              </Typography>
            </Stack>
            {loading && (
              <Box sx={{ width: '100%' }}>
                <LinearProgress />
              </Box>
            )}
            <Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>label</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  {category}
                  {category.data.length > 0 && Array.isArray(category) && (
                    <TableBody>
                      {category.data.map((u, index) => (
                        <TableRow hover key={index}>
                          <TableCell>
                            <Stack alignItems='center' direction='row' spacing={2}>
                              <Typography variant='subtitle2'>{u.label}</Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>{u.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default CategoryList
