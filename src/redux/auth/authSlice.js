import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, edit, current } from './authOperations';

const pending = state => {
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
    avatarURL: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.userData.name = payload.data.name;
        state.userData.email = payload.data.email;
        state.userData.avatarURL = payload.data.avatarURL;

        state.accessToken = payload.token;
        state.Login = true;
        state.userFetching = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.userData.email = payload.data.email;
        state.userData.name = payload.data.name;
        state.userData.avatarURL = payload.data.avatarURL;

        state.accessToken = payload.token;
        state.Login = true;
        state.userFetching = false;
      })
      .addCase(edit.fulfilled, (state, { payload }) => {
        state.userData.name = payload.data.name;
        state.userData.avatarURL = payload.data.avatarURL;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.userData.name = payload.data.name;
        state.userData.avatarURL = payload.data.avatarURL;

        state.accessToken = payload.token;
        state.userFetching = false;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))

      .addCase(signUp.pending, pending)
      .addCase(signIn.pending, pending)
      .addCase(current.pending, pending)

      .addCase(signUp.rejected, rejected)
      .addCase(signIn.rejected, rejected)
      .addCase(current.rejected, rejected, () => ({ ...initialState })),
});
export default authSlice.reducer;
