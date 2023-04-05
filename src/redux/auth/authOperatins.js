import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  signUpUserAPI,
  signInUserAPI,
  logOutUserAPI,
  currentUserAPI,
  editUserAPI,
} from 'service/Api/authUserAPI';

axios.defaults.baseURL = 'https://so-yummy-golt.onrender.com/api/v1';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { email, password } = user;
      await signUpUserAPI(user);
      const data = await signInUserAPI({ email, password });
      token.set(data.accessToken);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
      });
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (user, { rejectWithValue }) => {
    try {
      const data = await signInUserAPI(user);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
      });
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUserAPI();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const edit = createAsyncThunk(
  'auth/edit',
  async (user, { rejectWithValue }) => {
    try {
      const data = await editUserAPI(user);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
      });
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await currentUserAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
