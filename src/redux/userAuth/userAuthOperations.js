import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '../../shared/services/API/API';

export const userRegister = createAsyncThunk(
  'user/register',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.register(data);
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/login',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.login(data);
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.logout();
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const userRefresh = createAsyncThunk(
  'user/refresh',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.refresh(data);
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const userGetInfo = createAsyncThunk(
  'user/getInfo',
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.getUserInfo();
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const userUpdate = createAsyncThunk(
  'user/update',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.updateUser(data);
      console.log(response);
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);