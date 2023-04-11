import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from 'service/Api/axiosBaseURL';

import { subscribeUserAPI } from 'service/Api/authUserAPI';

export const token = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = '';
  },
};

export const subscribe = createAsyncThunk(
  'auth/subscribe',
  async (user, { rejectWithValue }) => {
    try {
      const data = await subscribeUserAPI(user);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
      });
      return rejectWithValue(error);
    }
  }
);
