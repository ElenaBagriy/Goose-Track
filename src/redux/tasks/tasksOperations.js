import { createAsyncThunk } from '@reduxjs/toolkit';
import { TasksAPI } from '../../shared/services/API/API';

export const getTasksList = createAsyncThunk(
  'tasks/getList',
  async (data, thunkAPI) => {
    try {
      const response = await TasksAPI.getTasksList(data);
      console.log(response);
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/create',
  async (data, thunkAPI) => {
    try {
      const response = await TasksAPI.createTask(data);
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id, thunkAPI) => {
    try {
      const response = await TasksAPI.deleteTask(id);
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const postTask = createAsyncThunk(
  'tasks/post',
  async (id, thunkAPI) => {
    try {
      const response = await TasksAPI.postTask(id);
      return response;
    } catch ({response}) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);