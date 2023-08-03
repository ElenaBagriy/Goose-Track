import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReviewsAPI } from '../../shared/services/API/API';

export const fetchReviews = createAsyncThunk(
  'reviews/get',
  async (_, thunkAPI) => {
    try {
      const reviews = await ReviewsAPI.getReviews();
      return reviews;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
