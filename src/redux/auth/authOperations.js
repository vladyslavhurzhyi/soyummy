import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from 'service/Api/axiosBaseURL';

import {
  signUpUserAPI,
  signInUserAPI,
  logOutUserAPI,
  currentUserAPI,
  editUserAPI,
  signInWithGoogleUserAPI,
} from 'service/Api/authUserAPI';

export const token = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { email, password } = user;
      await signUpUserAPI(user);
      const data = await signInUserAPI({ email, password });

      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return rejectWithValue(error);
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  'auth/signinwithgoogle',
  async (user, { rejectWithValue }) => {
    try {
      const data = await signInWithGoogleUserAPI(user);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (user, { rejectWithValue }) => {
    try {
      const data = await signInUserAPI(user);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
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
  async (formData, { rejectWithValue }) => {
    try {
      const data = await editUserAPI(formData);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
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
