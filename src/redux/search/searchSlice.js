import { createSlice } from '@reduxjs/toolkit';
import { getRecipesByQuery, getRecipesByIngredient } from './searchOperations';

const initialState = {
  items: [],
  queryType: 'title',
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRecipesByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.queryType = action.payload;
      })
      .addCase(getRecipesByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.queryType = action.payload;
      })
      .addCase(getRecipesByQuery.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipesByIngredient.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipesByQuery.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getRecipesByIngredient.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
  reducers: {
    changeQueryType(state, action) {
      state.queryType = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { changeQueryType } = searchSlice.actions;
