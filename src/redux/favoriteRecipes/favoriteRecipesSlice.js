import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addFavoriteRecipes,
  getFavoriteRecipes,
  removeFromFavorite,
} from './favoriteRecipesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFavoriteRecipes.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(addFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.data.push(action.payload.data);
      })
      .addCase(removeFromFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.data.findIndex(
          item => item._id === action.payload.data._id
        );
        state.items.data.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          getFavoriteRecipes.rejected,
          addFavoriteRecipes.rejected,
          removeFromFavorite.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          getFavoriteRecipes.pending,
          addFavoriteRecipes.pending,
          removeFromFavorite.pending
        ),
        state => {
          state.isLoading = true;
        }
      );
  },
});

export default favoriteRecipesSlice.reducer;
