import { Category } from 'src/api/category/category-type'
import PencilIcon from '@heroicons/react/24/solid/PencilIcon'

import { Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material'

export type CategoryProps = {
  edit:(data:Category) => void;
  category: Category;
}

export const CategoryCard = (props: CategoryProps) => {
  const {  edit,category } = props

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: '1px solid #dee2e6'
      }}
    >
      <CardContent>
        <Typography align='center' gutterBottom variant='h5'>
          {category.label}
        </Typography>
        <Typography align='center' variant='body1'>
          {category.description}
        </Typography>
      </CardContent>
      <Divider />
      <Stack alignItems='center' direction='row' justifyContent='space-between' spacing={2} sx={{ p: 2 }}>
        <Stack alignItems='center' direction='row' spacing={1}>
          <Button color='success'  onClick={()=>edit(category)} startIcon={<PencilIcon />}>
            Editer
          </Button>
        </Stack>
      </Stack>
    </Card>
  )
}
