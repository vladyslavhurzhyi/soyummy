import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getIngredients } from './ingredientsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('pending');
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

      .addMatcher(isAnyOf(getIngredients.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      });
  },
});

export default ingredientsSlice.reducer;
