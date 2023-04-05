import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom';

axios.defaults.baseURL = process.env.REACT_APP_SO_YUMMY_URL_BACK;
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ3MzNjYmJmYjI0OTg2YTA5MGYzMyIsIm5hbWUiOiJNYXNldmlrIiwiZW1haWwiOiJtYXNldmlrQG1haWwuY29tIiwiaWF0IjoxNjgwNzA5MDEzLCJleHAiOjE2ODA3OTU0MTN9._n3VeuDEun5zoZYMN2mdSI18D4dxAtSkotoQUXwaXJs`;

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${recipeId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (_, thunkAPI) => {
    const id = useParams();
    console.log(id);

    try {
      const response = await axios.get(`/recipes/${id}`);
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
  'recipes/fetchRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${recipeId}`);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
