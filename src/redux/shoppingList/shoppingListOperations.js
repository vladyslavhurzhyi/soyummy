import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/Api/axiosBaseURL';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/ShoppingList',
  async (_, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await api.get('/shopping-list');

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
      const {
        data: { data },
      } = await api.post('/shopping-list', ingredient);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteShoppingList = createAsyncThunk(
  'shoppingList/deleteShoppingList',
  async ({ recipeId, id }, thunkAPI) => {
    console.log(id);
    console.log(recipeId);

    const payload = {
      recipeId: [recipeId],
    };

    try {
      console.log(payload);
      const { data } = await api.delete(`/shopping-list/${id}`, payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteShoppingListItem = createAsyncThunk(
  'shoppingList/deleteShoppingList',
  async ({ id, recipeId }, thunkAPI) => {
    console.log(id);
    console.log(recipeId);
    try {
      const { data } = await api.delete(`/shopping-list/${id}}`, {
        recipeId: [...recipeId],
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
