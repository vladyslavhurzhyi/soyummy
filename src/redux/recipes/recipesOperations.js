import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const fetchRecipeById = createAsyncThunk(
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
