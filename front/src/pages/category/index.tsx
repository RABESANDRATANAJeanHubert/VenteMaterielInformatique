// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { RootState, appDispatch } from 'src/store'
import { useSelector } from 'react-redux'
import { TableRow } from 'mdi-material-ui'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategories } from 'src/api/category/category-list'

const TableDense = () => {
  const category = useSelector((state: RootState) => state.category.data)
  const dispatch = useDispatch<appDispatch>()

  useEffect(() => {
    if (category.length <= 2) dispatch(getCategories())
  }, [category.length, dispatch])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableBody>
          {Array.isArray(category)
            ? category.map(row => (
                <TableRow key={row.id} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {row.description}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.label}
                  </TableCell>
                </TableRow>
              ))
            : ''}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableDense
