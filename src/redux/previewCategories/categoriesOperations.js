import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMainCategoriestAPI } from '../../service/Api/previewCategoriesAPI';

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
