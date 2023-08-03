import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '../../shared/services/API/API';

export const userRegister = createAsyncThunk(
  'user/register',
  async (data, thunkAPI) => {
    try {
      const reviews = await UserAPI.register(data);
      return reviews;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/login',
  async (data, thunkAPI) => {
    try {
      const reviews = await UserAPI.login(data);
      return reviews;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);