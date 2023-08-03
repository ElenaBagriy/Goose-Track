import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userRegister } from './userAuthOperations';

const userInitialState = {
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder =>
    builder
    // ------------ Register user ----------------
      .addCase(userRegister.pending, state => {
        state.isLoading = true;
        state.error = true;
        state.isLoggedIn = false;
      })
      .addCase(userRegister.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.name = payload.name;
        state.email = payload.email;
        state.accessToken = payload.data.accessToken;
        state.refreshToken = payload.data.refreshToken;
        state.error = false;
        state.isLoggedIn = true;
      })
      .addCase(userRegister.rejected, state => {
        state.isLoading = false;
        state.error = true;
        state.isLoggedIn = false;
      })
      // ------------ Login user ----------------
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
        state.error = true;
        state.isLoggedIn = false;
      })
      .addCase(userLogin.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.name = payload.name;
        state.email = payload.email;
        state.accessToken = payload.data.accessToken;
        state.refreshToken = payload.data.refreshToken;
        state.error = false;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.rejected, state => {
        state.isLoading = false;
        state.error = true;
        state.isLoggedIn = false;
      }),
});

export const userReducer = userSlice.reducer;
