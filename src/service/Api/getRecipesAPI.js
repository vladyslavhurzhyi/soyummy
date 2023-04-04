import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-golt.onrender.com/api/v1';
axios.defaults.params = {
  per_page: 8,
};

export const getAllRecipes = () => {
  return axios
    .get('/recipes', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SO_YUMMY_URL_BACK}`,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getCategoriesList = () => {
  return axios.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

export const getRecipesByCategory = category => {
  return axios.get(`/recipes/category/${category}`).then(({ data }) => {
    return data;
  });
};
