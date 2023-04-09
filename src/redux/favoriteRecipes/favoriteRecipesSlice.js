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

const isPendingAction = action => {
  return action.type.endsWith('pending');
};

export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(removeFromFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        const index = state.items.findIndex(item => item.id === action.payload);
        console.log(index);
        state.items.splice(index, 1);
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
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      });
  },
});

export default favoriteRecipesSlice.reducer;
