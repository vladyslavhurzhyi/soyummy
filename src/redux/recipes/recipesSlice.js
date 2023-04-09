import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addRecipe, fetchRecipeById } from './recipesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('pending');
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.data;
      })
      .addMatcher(
        isAnyOf(addRecipe.rejected, fetchRecipeById.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      });
  },
});

export default recipesSlice.reducer;
