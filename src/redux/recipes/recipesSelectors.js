export const selectRecipes = state => state.recipes.items;
export const selectIsLoading = state => state.recipes.isLoading;
export const selectError = state => state.recipes.error;
export const selectRecipeById = state => state.recipes.recipeById;
export const selectNewRecipe = state => state.recipes.newRecipe;
