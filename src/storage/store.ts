import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './reducers/apiSlice';
import statesSlice from './reducers/statesSlice';

const store = configureStore({
  reducer: {
    states: statesSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
