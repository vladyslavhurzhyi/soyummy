import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCategories } from './categoriesOperations';
import { setCurrentCategory } from './categoriesOperations';

const initialState = {
  currentCategory: 'Breakfast',
  list: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('pending');
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(setCurrentCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCategory = action.payload;
      })
      .addMatcher(isAnyOf(getCategories.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      });
  },
});

export default categoriesSlice.reducer;
