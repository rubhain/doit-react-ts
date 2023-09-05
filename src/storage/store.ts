import { configureStore } from '@reduxjs/toolkit';
import { doitApi } from './apiSlice';

const store = configureStore({
  reducer: {
    [doitApi.reducerPath]: doitApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(doitApi.middleware),
});

export default store;
