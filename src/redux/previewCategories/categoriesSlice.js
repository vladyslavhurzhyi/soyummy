import { createSlice } from '@reduxjs/toolkit';
import { getMainCategories, getPopularRecipes } from './categoriesOperations';

const pending = state => {
  state.isCategoryFetching = true;
};
const rejected = state => {
  state.isCategoryFetching = false;
};

export const outerRecipesSlice = createSlice({
  name: 'mainRecipes',
  initialState: {
    isCategoryFetching: false,
    mainCategories: [],
    popularRecipes: [],
    isError: false,
  },

  extraReducers: builder =>
    builder

      .addCase(getMainCategories.fulfilled, (state, { payload }) => {
        state.mainCategories = payload;
        state.isCategoryFetching = false;
      })

      .addCase(getMainCategories.pending, pending)

      .addCase(getMainCategories.rejected, rejected)

      .addCase(getPopularRecipes.fulfilled, (state, { payload }) => {
        state.popularRecipes = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getPopularRecipes.pending, pending)
      .addCase(getPopularRecipes.rejected, rejected),
});

export const mainRecipeReduser = outerRecipesSlice.reducer;
