import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/Api/axiosBaseURL';
import { toast } from 'react-toastify';

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
    const { recipeId, id, amount, measure, thb, ttl } = ingredient;
    const toAddIngredient = { recipeId, id, amount, measure };
    try {
      const { data } = await api.post('/shopping-list', toAddIngredient);
      toast.success('Added to Shopping list', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      if ((data.message = 'success')) {
      }
      return { recipeId: [recipeId], id, amount, measure, thb, ttl };
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
      toast.success('Remove from Shopping list', {
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
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteShoppingListItem = createAsyncThunk(
  'shoppingList/deleteShoppingList',
  async ({ id, recipeId }, thunkAPI) => {
    const deleteItem = {
      recipeId: [...recipeId],
    };
    try {
      await api.delete(`/shopping-list/${id}`, {
        data: deleteItem,
      });
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
