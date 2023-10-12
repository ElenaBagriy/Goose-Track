import { createSlice } from '@reduxjs/toolkit';
import { createTask, deleteTask, getTasksList, postTask } from './tasksOperations';

const tasksInitialState = {
  tasksList: [
    {
      "_id": "64303c8582dc6fccdee4f8df",
      "title": "toDo",
      "start": "9-00",
      "end": "14-00",
      "priority": "medium",
      "category": "to-do",
      "owner": "64303c5f82dc6fccdee4f8dc",
      "date": "2023-03-17T00:00:00.000Z",
      "createdAt": "2023-04-07T15:53:41.088Z",
      "updatedAt": "2023-04-07T15:53:41.088Z",
      "__v": 0
    }
  ],
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
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getTasksList.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        // state.tasksList = payload;
      })
      .addCase(getTasksList.rejected, state => {
        state.isLoading = false;
        state.error = true;
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
