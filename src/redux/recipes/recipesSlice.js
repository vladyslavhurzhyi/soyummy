import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addRecipe,
  fetchRecipeById,
  // addToFavorite,
  // removeFromFavorite,
} from './recipesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('pending');
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      // .addCase(addToFavorite.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items.push(action.payload);
      // })
      // .addCase(removeFromFavorite.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.items.findIndex(
      //     contact => contact.id === action.payload.id
      //   );
      //   state.items.splice(index, 1);
      // })
      .addMatcher(
        isAnyOf(
          addRecipe.rejected,
          fetchRecipeById.rejected
          // addToFavorite.rejected,
          // removeFromFavorite.rejected
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

export default recipesSlice.reducer;
