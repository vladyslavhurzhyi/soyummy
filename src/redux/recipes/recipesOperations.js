import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import api from 'service/Api/axiosBaseURL';


export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`/recipes`, formData);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const response = await api.get(`/recipes/${recipeId}`);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addToFavorite = createAsyncThunk(
//   'recipes/fetchRecipeById',
//   async (_, thunkAPI) => {
//     const id = useParams();
//     console.log(id);

//     try {
//       const response = await axios.get(`/recipes/${id}`);
//       return response.data;
//     } catch (error) {
//       toast.error('Something went wrong, please try again later', {
//         autoClose: 3000,
//       });
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const removeFromFavorite = createAsyncThunk(
//   'recipes/fetchRecipeById',
//   async (recipeId, thunkAPI) => {
//     try {
//       const response = await axios.get(`/recipes/${recipeId}`);
//       return response.data;
//     } catch (error) {
//       toast.error('Something went wrong, please try again later', {
//         autoClose: 3000,
//       });
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// import { getAllRecipes } from 'service/Api/getRecipesApi.js';

// export const getAllRecipes = createAsyncThunk(
//   'ownRecipes/getRecipes',
//   async ({ page, per_page }, { rejectWithValue }) => {
//     try {
//       const data = await getOwnRecipesAPI(page ?? null, per_page ?? null);
//       return { recipes: data.meals, total: data.totalHits };
//     } catch (error) {
//       return rejectWithValue(error.response.status);
//     }
//   }
// );
