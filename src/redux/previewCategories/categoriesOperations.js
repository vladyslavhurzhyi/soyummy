import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMainCategoriestAPI } from '../../service/Api/previewCategoriesAPI';

export const getMainCategories = createAsyncThunk(
  'outerRecipes/mainCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMainCategoriestAPI();
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
