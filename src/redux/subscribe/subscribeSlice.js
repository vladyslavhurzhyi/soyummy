import { createSlice } from '@reduxjs/toolkit';
import { subscribe } from './subscribeOperations';

const initialState = {
  hasSubsSent: false,
};

export const subsSlice = createSlice({
  name: 'subscribe',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(subscribe.fulfilled, state => {
        state.hasSubsSent = true;
      })
      .addCase(subscribe.pending, state => {
        state.hasSubsSent = false;
      })
      .addCase(subscribe.rejected, state => {
        state.hasSubsSent = false;
      }),
});
export default subsSlice.reducer;
