import { createSlice } from '@reduxjs/toolkit';
import { userGetInfo, userLogin, userLogout, userRefresh, userRegister, userUpdate } from './userAuthOperations';

const userInitialState = {
  userData: {},
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
        state.error = false;
        state.isLoggedIn = false;
      })
      .addCase(userRegister.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.userData.name = payload.name;
        state.userData.email = payload.email;
        state.accessToken = payload.data.accessToken;
        state.refreshToken = payload.data.refreshToken;
        state.error = false;
        state.isLoggedIn = true;
      })
      .addCase(userRegister.rejected, state => {
        state.userData = {};
        state.isLoading = false;
        state.error = true;
        state.isLoggedIn = false;
      })
      // ------------ Login user ----------------
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
        state.error = false;
        state.isLoggedIn = false;
      })
      .addCase(userLogin.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.userData.name = payload.name;
        state.userData.email = payload.email;
        state.accessToken = payload.data.accessToken;
        state.refreshToken = payload.data.refreshToken;
        state.error = false;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.rejected, state => {
        state.userData = {};
        state.isLoading = false;
        state.error = true;
        state.isLoggedIn = false;
      })
      // ------------ Logout user ----------------
      .addCase(userLogout.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.isLoading = false;
        state.userData = {};
        state.isLoggedIn = false;
        state.accessToken = '';
        state.refreshToken = '';
      })
      .addCase(userLogout.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      // ------------ Refresh user ----------------
      .addCase(userRefresh.pending, state => {
        
      })
      .addCase(userRefresh.fulfilled, (state, {payload}) => {
       
      })
      .addCase(userRefresh.rejected, state => {
        
      })
      // ------------ Get user info ----------------
      .addCase(userGetInfo.pending, state => {
        state.isLoading = true;
        state.error = true;
      })
      .addCase(userGetInfo.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.userData.name = payload.name;
        state.userData.email = payload.email;
        state.userData.birthday = payload.birthday;
        state.userData.phone = payload.phone;
        state.userData.skype = payload.skype;
        state.userData.image = payload.userImgUrl;
        state.userData.id = payload._id
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.error = false;
        state.isLoggedIn = true;
      })
      .addCase(userGetInfo.rejected, state => {
        
      })
      // ------------ Update user ----------------
      .addCase(userUpdate.pending, state => {

      })
      .addCase(userUpdate.fulfilled, (state, {payload}) => {
        
      })
      .addCase(userUpdate.rejected, state => {
        
      }),
});

export const userReducer = userSlice.reducer;
