import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/Api/axiosBaseURL';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/shopping-list');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addShoppingList = createAsyncThunk(
  'shoppingList/addShoppingList',
  async (ingredient, thunkAPI) => {
    try {
      const { data } = await api.post('/shopping-list', ingredient);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteShoppingList = createAsyncThunk(
  'shoppingList/deleteShoppingList',
  async ({ recipeId, productId }, thunkAPI) => {
    console.log(productId);
    console.log(recipeId);
    try {
      const { data } = await api.delete(`/shopping-list/${productId}`, {
        recipeId: [recipeId],
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
