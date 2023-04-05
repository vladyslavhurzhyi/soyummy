// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

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
