import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import api from 'service/Api/axiosBaseURL';

export const getFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/getRecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`/recipes/my/favorite`);
      const favRecipe = data.data;
      return favRecipe;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/addFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const response = await api.patch(
        `/recipes/${recipeId}/favorite`,
        recipeId
      );
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromFavorite = createAsyncThunk(
  'favoriteRecipes/removeFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/recipes/${recipeId}/favorite`);
      toast.success('Removed from favorites', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
