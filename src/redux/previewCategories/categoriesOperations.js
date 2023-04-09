import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getContentForMain } from './categoriesSelectors';
import {
  getMainCategoriestAPI,
  getPopularRecipesAPI,
} from '../../service/Api/previewCategoriesAPI';

export const getMainCategories = createAsyncThunk(
  'mainRecipes/mainCategories',
  async (params, { rejectWithValue }) => {
    try {
      const { categoriesLimit, recipesInCategory } = params;
      const data = await getMainCategoriestAPI(
        categoriesLimit,
        recipesInCategory
      );
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getPopularRecipes = createAsyncThunk(
  'mainRecipes/popular',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPopularRecipesAPI();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
