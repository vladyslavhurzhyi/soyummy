import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getContentForMain } from './categoriesSelectors';
import { getMainCategoriestAPI } from '../../service/Api/previewCategoriesAPI';

export const getMainCategories = createAsyncThunk(
  'outerRecipes/mainCategories',
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
