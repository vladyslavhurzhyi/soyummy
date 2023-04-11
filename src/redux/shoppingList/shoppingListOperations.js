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
      toast.success('Added to Shopping list');
      if ((data.message = 'success')) {
      }
      return { recipeId: [recipeId], id, amount, measure, thb, ttl };
    } catch (e) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteShoppingListItem = createAsyncThunk(
  'shoppingList/deleteShoppingList',
  async ({ id, recipeId }, thunkAPI) => {
    console.log(id);
    console.log(recipeId);
    const deleteItem = {
      recipeId: [...recipeId],
    };
    try {
      await api.delete(`/shopping-list/${id}`, {
        data: deleteItem,
      });
      toast.success('Removed from Shopping list');
      return id;
    } catch (e) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
