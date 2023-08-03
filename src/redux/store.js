import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { reviewsReducer } from './reviews/reviewsSlice';
import { userReducer } from './userAuth/userAuthSlice';

// const userConfig = {
//   key: 'token',
//   storage,
//   whitelist: ['refreshToken', 'accessToken'],
// };

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
