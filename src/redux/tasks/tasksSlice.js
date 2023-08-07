import { createSlice } from '@reduxjs/toolkit';
import { createTask, deleteTask, getTasksList, postTask } from './tasksOperations';

const tasksInitialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: builder =>
    builder
    // ------------ Get tasks list ----------------
      .addCase(getTasksList.pending, state => {
        
      })
      .addCase(getTasksList.fulfilled, (state, {payload}) => {
        
      })
      .addCase(getTasksList.rejected, state => {
        
      })
      // ------------ Create task ----------------
      .addCase(createTask.pending, state => {
        
      })
      .addCase(createTask.fulfilled, (state, {payload}) => {
        
      })
      .addCase(createTask.rejected, state => {
        
      })
      // ------------ Delete task ----------------
      .addCase(deleteTask.pending, state => {
        
      })
      .addCase(deleteTask.fulfilled, (state, {payload}) => {
        
      })
      .addCase(deleteTask.rejected, state => {
        
      })
      // ------------ Post task ----------------
      .addCase(postTask.pending, state => {
        
      })
      .addCase(postTask.fulfilled, (state, {payload}) => {
       
      })
      .addCase(postTask.rejected, state => {
        
      }),
});

export const tasksReducer = tasksSlice.reducer;
