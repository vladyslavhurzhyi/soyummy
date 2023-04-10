import api from './axiosBaseURL';

export const signUpUserAPI = user => {
  return api.post('/auth/signup', user).then(({ data }) => {
    return data;
  });
};

export const signInUserAPI = user => {
  return api.post('/auth/signin', user).then(({ data }) => {
    return data;
  });
};

export const logOutUserAPI = user => {
  return api.post('/auth/logout').then(({ data }) => {
    return data;
  });
};

export const currentUserAPI = () => {
  return api.get('/auth/current').then(({ data }) => {
    return data;
  });
};

export const editUserAPI = body => {
  return api.patch('/auth/edit', body).then(({ data }) => {
    return data;
  });
};

export const subscribeUserAPI = email => {
  return api.patch('/auth/subscribe', email).then(({ data }) => {
    return data;
  });
};
