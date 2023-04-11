import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { subscribeUserAPI } from 'service/Api/authUserAPI';

export const subscribe = createAsyncThunk(
  'subscribe/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const data = await subscribeUserAPI({ email });
      toast.success('Subscribed!');
      return data;
    } catch (error) {
      console.log(error.response.data.message);
      toast.error("Message wasn't sent", {
        position: 'top-center',
      });
      return rejectWithValue(error);
    }
  }
);
