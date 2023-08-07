import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reviewsReducer } from './reviews/reviewsSlice';
import { userReducer } from './userAuth/userAuthSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { themeReducer } from './theme/themeSlise';

const userConfig = {
  key: 'token',
  storage,
  whitelist: ['refreshToken', 'accessToken'],
};

const themeConfig = {
  key: 'theme',
  storage,
  whitelist: ["value"],
};

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    user: persistReducer(userConfig, userReducer),
    tasks: tasksReducer,
    theme: persistReducer(themeConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
