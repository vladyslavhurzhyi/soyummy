import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addRecipe,
  fetchRecipeById,
  fetchPopular,
  fetchRecipesByCategory,
} from './recipesOperations';

const initialState = {
  recipeById: {},
  newRecipe: {},
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
        state.newRecipe = action.payload;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipeById = action.payload.data;
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.data;
      })
      .addMatcher(
        isAnyOf(
          addRecipe.rejected,
          fetchRecipeById.rejected,
          fetchPopular.rejected,
          fetchRecipesByCategory.rejected
        ),
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
