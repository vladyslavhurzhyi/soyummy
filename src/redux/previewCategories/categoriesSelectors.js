export const getContentForMain = state => state.outerRecipes.mainCategories;

export const getIsError = state => state.outerRecipes.isError;

export const getIsCategoryFetching = state =>
  state.outerRecipes.isCategoryFetching;
