import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews } from './reviewsOperations';

const reviewsInitialState = {
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: reviewsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchReviews.pending, state => {
        state.isLoading = true;
        state.error = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
        state.error = false;
      })
      .addCase(fetchReviews.rejected, state => {
        state.isLoading = false;
      }),
});

export const reviewsReducer = reviewsSlice.reducer;
