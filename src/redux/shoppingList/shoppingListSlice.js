import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchShoppingList,
  addShoppingList,
  deleteShoppingList,
} from './shoppingListOperations';
import {
  helperFulfilledAdd,
  helperFulfilledDelete,
  helperFulfilledFetch,
  helperPending,
  helperRejected,
} from './helpersShoppingList';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    shoppingList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder

      .addCase(fetchShoppingList.fulfilled, helperFulfilledFetch)

      .addCase(addShoppingList.fulfilled, helperFulfilledAdd)

      .addCase(deleteShoppingList.fulfilled, helperFulfilledDelete)

      .addMatcher(
        isAnyOf(
          fetchShoppingList.pending,
          addShoppingList.pending,
          deleteShoppingList.pending
        ),
        helperPending
      )
      .addMatcher(
        isAnyOf(
          fetchShoppingList.rejected,
          addShoppingList.rejected,
          deleteShoppingList.rejected
        ),
        helperRejected
      );
  },
});

export default shoppingListSlice.reducer;
