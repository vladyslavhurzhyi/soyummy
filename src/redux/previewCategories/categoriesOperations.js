import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'service/Api/axiosBaseURL';

export const getMainCategories = createAsyncThunk(
  'mainRecipes/mainCategories',
  async (params, { rejectWithValue }) => {
    try {
      const { categoriesLimit = 4, recipesInCategory = 4 } = params;
      const data = await api
        .get(
          `/recipes/main-page/?categoriesLimit=${categoriesLimit}&recipesInCategory=${recipesInCategory}`
        )
        .then(({ data }) => {
          console.log(data);
          return data;
        });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
