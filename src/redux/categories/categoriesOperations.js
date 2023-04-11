import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from 'service/Api/axiosBaseURL';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`/recipes/category-list`);
      return data.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setCurrentCategory = createAsyncThunk(
  'categories/setCurrentCategory',
  (currentCategory, thunkAPI) => {
    try {
      return currentCategory;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchRecipesByCategory = createAsyncThunk(
//   'recipeCategory/fetchRecipesByCategory',
//   async category => {
//     const response = await api.get(`/recipes/category/${category}`);
//     return response.data;
//   }
// );
