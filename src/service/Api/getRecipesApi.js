import api from './axiosBaseURL';

// import { token } from 'redux/auth/authOperations';
// const TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRjYTdlYjZlNTk3NWMwNTQzNDhjZCIsIm5hbWUiOiJnaWFuZnJhbmNvIiwiZW1haWwiOiJ2a2h2MjIwMjJAZ21haWwuY29tIiwiaWF0IjoxNjgwNzIyNTU4LCJleHAiOjE2ODA4MDg5NTh9.ypO9vHmG_RT8XkIZxpZPgHhX-5I1JS1-5ci_BQsAFTQ';

// Секретні дані винесіть у .env. GitHub не пропускає комміти

// axios.defaults.params = {
//   per_page: 8,
// };

export const getAllRecipes = () => {
  return api
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
  return api.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

export const getRecipesByCategory = category => {
  return api.get(`/recipes/category/${category}`).then(({ data }) => {
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
