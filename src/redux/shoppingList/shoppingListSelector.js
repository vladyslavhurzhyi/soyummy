export const selectShoppingList = state => state.shoppingList.shoppingList;
export const selectShoppingListIsError = state => state.shoppingList.error;
export const selectShoppingListIsLoading = state =>
  state.shoppingList.isLoading;
