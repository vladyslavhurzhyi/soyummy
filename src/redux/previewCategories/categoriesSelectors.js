export const getContentForMain = state => state.mainRecipes.mainCategories;

export const getIsError = state => state.mainRecipes.isError;

export const getIsCategoryFetching = state =>
  state.mainRecipes.isCategoryFetching;
