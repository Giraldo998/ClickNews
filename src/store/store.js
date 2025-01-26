import { configureStore } from '@reduxjs/toolkit';
import { NewsApi } from './API/NewsApi';

export const store = configureStore({
  reducer: {
    [NewsApi.reducerPath]: NewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(NewsApi.middleware),
});


