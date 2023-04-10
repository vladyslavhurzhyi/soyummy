import api from './axiosBaseURL';

// import { token } from 'redux/auth/authOperations';

export const getAllRecipes = () => {
  return api
    .get('/recipes', {
      headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getCategoriesList = () => {
  return api.get('/recipes/category-list').then(({ data }) => {
    return data.data;
  });
};

export const getRecipesByCategory = category => {
  return api.get(`/recipes/category/${category}`).then(({ data }) => {
    return data;
  });
};

export const getRecipesByQuery = (query, type) => {
  return api
    .get(`/recipes?limit=12&page=1&filter%5B${type}%5D=${query}`, {
      headers: {
        // Authorization: `${TOKEN}`,
      },
    })
    .then(({ data }) => {
      return data;
    });
};
