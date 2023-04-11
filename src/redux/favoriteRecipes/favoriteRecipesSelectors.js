export const selectFavRecipes = state => state.favoriteRecipes.items;
export const selectFavRecipesData = state => state.favoriteRecipes.items.data;
export const selectFavIsLoading = state => state.favoriteRecipes.isLoading;
export const selectFavError = state => state.favoriteRecipes.error;
