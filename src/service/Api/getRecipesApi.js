import api from './axiosBaseURL';

<<<<<<< Updated upstream
// import { token } from 'redux/auth/authOperations';
=======
axios.defaults.baseURL = 'https://so-yummy-golt.onrender.com/api/v1';
>>>>>>> Stashed changes

export const getAllRecipes = () => {
  return api
    .get('/recipes', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getCategoriesList = () => {
  return api.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

export const getRecipesByCategory = category => {
<<<<<<< Updated upstream
  return api.get(`/recipes/category/${category}`).then(({ data }) => {
=======
  return axios.get(`/recipes/category/${category}?limit=8`).then(({ data }) => {
>>>>>>> Stashed changes
    return data;
  });
};

export const getRecipesByQuery = query => {
  return api
    .get(`/recipes?limit=12&page=1&filter%5Btitle%5D=${query}`, {
      headers: {
        // Authorization: `${TOKEN}`,
      },
    })
    .then(({ data }) => {
      return data;
    });
};
