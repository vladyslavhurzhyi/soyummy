import { createSlice } from '@reduxjs/toolkit';
import { getIngredients } from './ingredientsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addMatcher(getIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getIngredients.pending, state => {
        state.isLoading = true;
      });
  },
});

export default ingredientsSlice.reducer;
