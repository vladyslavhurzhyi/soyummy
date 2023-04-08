import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// import axios from 'axios';
import api from 'service/Api/axiosBaseURL';

export const getIngredients = createAsyncThunk(
  'ingredients/getIngredients',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`/ingredients/list`);
      const ingredientsList = data.data;
      return ingredientsList;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
