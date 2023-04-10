import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'service/Api/axiosBaseURL';

export const fetchRecipesByCategory = createAsyncThunk(
  'recipeCategory/fetchRecipesByCategory',
  async category => {
    const response = await api.get(`/recipes/category/${category}`);
    return response.data;
  }
);
