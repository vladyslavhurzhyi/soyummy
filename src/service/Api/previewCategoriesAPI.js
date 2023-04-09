import api from './axiosBaseURL';

export const getMainCategoriestAPI = () => {
  return api.get('/recipes/main-page').then(({ data }) => {
    return data.data;
  });
};
