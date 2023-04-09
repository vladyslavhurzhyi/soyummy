import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMyRecipes, removeMyRecipes } from './myRecipesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('pending');
};

export const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(removeMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(getMyRecipes.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      });
  },
});

export default myRecipesSlice.reducer;
