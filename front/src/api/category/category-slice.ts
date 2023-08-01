import { createCategoryThunk } from './category-create-thunk'
import { Category, CategoryAddAction, CategoryDeleteAction, CategoryUpdateAction } from './category-type'
import { createSlice } from '@reduxjs/toolkit'
import { updateCategoryThunk } from './category-update-thunk'
import { removeCategoryThunk } from './category-remove-thunk'

export type State = {
  data: Category[]
  loading: boolean
  error: string
}

export const initialState: State = {
  data: [],
  loading: true,
  error: ''
}

function add(state: State, action: CategoryAddAction) {
  if (state.data.findIndex(i => i.id == action.payload.id) >= 0) return
  state.data.unshift(action.payload)
}
function update(state: State, action: CategoryUpdateAction) {
  const index = state.data.findIndex(i => i.id == action.payload.id)
  if (index > -1) state.data[index] = action.payload
}

function remove(state: State, action: CategoryDeleteAction) {
  const index = state.data.findIndex(i => i.id == action.payload)
  if (index > -1) state.data.splice(Number(action.payload))
}

const slice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // ADD Category

      .addCase(createCategoryThunk.pending, state => {
        state.loading = true
      })
      .addCase(createCategoryThunk.fulfilled, (state, action) => {
        ;(state.loading = false), add(state, action), (state.error = '')
      })
      .addCase(createCategoryThunk.rejected, (state, action) => {
        ;(state.loading = false), (state.error = action.error.message || ''), (state.data = [])
      })

      //UPDATE CATEGORY
      .addCase(updateCategoryThunk.pending, state => {
        state.loading = true
      })
      .addCase(updateCategoryThunk.fulfilled, (state, action) => {
        update(state, action), (state.loading = false), (state.error = '')
      })
      .addCase(updateCategoryThunk.rejected, (state, action) => {
        ;(state.data = []), (state.error = action.error.message || ''), (state.loading = false)
      })

      // REMOVE CATEGORY
      .addCase(removeCategoryThunk.pending, state => {
        state.loading = true
      })
      .addCase(removeCategoryThunk.fulfilled, (state, action) => {
        ;(state.loading = false), remove(state, action), (state.error = '')
      })
      .addCase(removeCategoryThunk.rejected, (state, action) => {
        ;(state.loading = false), (state.data = []), (state.error = action.error.message || '')
      })
  }
})
export default slice.reducer
