import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchShoppingList,
  addShoppingList,
  deleteShoppingListItem,
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

      .addCase(deleteShoppingListItem.fulfilled, helperFulfilledDelete)

      .addMatcher(
        isAnyOf(
          fetchShoppingList.pending,
          addShoppingList.pending,
          deleteShoppingListItem.pending
        ),
        helperPending
      )
      .addMatcher(
        isAnyOf(
          fetchShoppingList.rejected,
          addShoppingList.rejected,
          deleteShoppingListItem.rejected
        ),
        helperRejected
      );
  },
});

export default shoppingListSlice.reducer;
