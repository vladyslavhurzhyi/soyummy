import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-golt.onrender.com/api/v1';
axios.defaults.params = {
  per_page: 8,
};

export const getAllRecipes = () => {
  return axios
    .get('/recipes', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmM2YWJiN2M1ZmYwNTcwMjgzODY5OSIsIm5hbWUiOiJKb2huIEpvaG4iLCJlbWFpbCI6ImpvaG5zbWl0aEBtYWlsLmNvbSIsImlhdCI6MTY4MDYzMjUwNywiZXhwIjoxNjgwNzE4OTA3fQ.V2ZcR5bfHSb6NEyrVNFwHkDOEdZDBAjPNZn284YWupo',
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
