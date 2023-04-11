import { createSlice } from '@reduxjs/toolkit';
import { subscribe } from './subscribeOperations';

// const pending = state => {
//   state.isRefreshing = true;
//   state.userFetching = true;
// };

// const rejected = state => {
//   state.userFetching = false;
//   state.Login = false;
// };

const initialState = {
  accessToken: null,
  Login: true,
  userFetching: false,
  isRefreshing: false,
  userData: {
    email: null,
  },
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'subscribe',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(subscribe.fulfilled, (state, { payload }) => {
        state.userData.email = payload.data.email;

        state.accessToken = payload.token;
        state.Login = true;
        state.userFetching = false;
        state.isRefreshing = false;
      })
});
export default authSlice.reducer;
