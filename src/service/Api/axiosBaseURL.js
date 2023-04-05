import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_SO_YUMMY_URL_BACK,
});

export default api;
