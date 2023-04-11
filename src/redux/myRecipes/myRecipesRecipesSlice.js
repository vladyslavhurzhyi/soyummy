import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMyRecipes, removeMyRecipes } from './myRecipesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isFetching: false,
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
        state.isFetching = false;
        state.error = null;
        state.items = action.payload;
        state.isLoading = false;
      })

      .addCase(removeMyRecipes.fulfilled, (state, action) => {
        const index = state.items.data.findIndex(
          item => item.id === action.payload.id
        );
        state.items.data.splice(index, 1);
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getMyRecipes.rejected), (state, action) => {
        state.isLoading = false;
        state.isFetching = false;
        state.error = action.payload;
      })
      .addMatcher(isPendingAction, state => {
        state.isFetching = true;
        state.isLoading = true;
      });
  },
});

export default myRecipesSlice.reducer;
