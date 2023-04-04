import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, edit, current } from './authOperatins';

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
    avatar: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.userData.email = payload.user.email;
        state.userData.name = payload.user.name;
        state.userData.avatar = payload.user.avatar;

        state.accessToken = payload.accessToken;
        state.Login = true;
        state.userFetching = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.userData.email = payload.user.email;
        state.userData.name = payload.user.name;
        state.userData.avatar = payload.user.avatarURL;

        state.accessToken = payload.accessToken;
        state.Login = true;
        state.userFetching = false;
      })
      .addCase(edit.fulfilled, (state, { payload }) => {
        state.userData.name = payload.user.name;
        state.userData.avatar = payload.user.avatarURL;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.userData.name = payload.user.name;
        state.userData.avatar = payload.user.avatarURL;

        state.accessToken = payload.accessToken;
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
