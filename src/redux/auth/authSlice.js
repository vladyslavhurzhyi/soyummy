import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  edit,
  current,
  signInWithGoogle,
} from './authOperations';

const pending = state => {
  state.isRefreshing = true;
  state.userFetching = true;
};

const rejected = state => {
  state.userFetching = false;
  state.Login = false;
};

const initialState = {
  accessToken: null,
  Login: false,
  userFetching: false,
  isRefreshing: false,
  userData: {
    email: null,
    name: null,
    avatarUrl: null,
  },
};

const signInFulfilledHandler = (state, { payload }) => {
  state.userData.email = payload.data.email;
  state.userData.name = payload.data.name;
  state.userData.avatarUrl = payload.data.avatarUrl;

  state.accessToken = payload.token;
  state.Login = true;
  state.userFetching = false;
  state.isRefreshing = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.userData.name = payload.data.name;
        state.userData.email = payload.data.email;
        state.userData.avatarUrl = payload.data.avatarUrl;

        state.accessToken = payload.token;

        state.userFetching = false;
        state.isRefreshing = false;
        state.Login = true;
      })
      .addCase(signIn.fulfilled, signInFulfilledHandler)
      .addCase(signInWithGoogle.fulfilled, signInFulfilledHandler)
      .addCase(edit.fulfilled, (state, { payload }) => {
        state.userData.name = payload.data.name;
        state.userData.avatarUrl = payload.data.avatarUrl;
      })
      .addCase(current.pending, pending)
      .addCase(signUp.pending, pending)
      .addCase(signIn.pending, pending)
      .addCase(signInWithGoogle.pending, pending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.userData.name = payload.data.name;
        state.userData.avatarUrl = payload.data.avatarUrl;
        state.userData.email = payload.data.email;

        state.accessToken = payload.token;
        state.userFetching = false;
        state.Login = true;
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))

      .addCase(signUp.rejected, rejected)
      .addCase(signIn.rejected, rejected)
      .addCase(signInWithGoogle.rejected, rejected)
      .addCase(current.rejected, rejected, () => ({ ...initialState })),
});
export default authSlice.reducer;
