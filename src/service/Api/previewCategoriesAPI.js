import api from './axiosBaseURL';

export const getMainCategoriestAPI = (
  categoriesLimit = 4,
  recipesInCategory = 4
) => {
  return api
    .get(
      `/recipes/main-page/?categoriesLimit=${categoriesLimit}&recipesInCategory=${recipesInCategory}`
    )
    .then(({ data }) => {
      return data.data;
    });
};

export const getPopularRecipesAPI = () => {
  return api.get('/recipes/popular').then(({ data }) => {
    console.log(data);
    return data;
  });
};
