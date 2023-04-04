import axios from 'axios';

axios.defaults.backURL = process.env.SO_YUMMY_URL_BACK;

export const signUpUserAPI = user => {
  return axios.post('/auth/signup', user).then(({ data }) => {
    return data;
  });
};

export const signInUserAPI = user => {
  return axios.post('/auth/signin', user).then(({ data }) => {
    return data;
  });
};

export const logOutUserAPI = user => {
  return axios.post('/auth/logout').then(({ data }) => {
    return data;
  });
};

export const currentUserAPI = () => {
  return axios.get('/auth/current').then(({ data }) => {
    return data;
  });
};

export const editUserAPI = body => {
  return axios.put('/auth/edit', body).then(({ data }) => {
    return data;
  });
};

export const subscribeUserAPI = email => {
  return axios.patch('/auth/subscribe', email).then(({ data }) => {
    return data;
  });
};
