import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    getBoards: builder.query({
      query: () => '/boards',
    }),
    getSelectedBoard: builder.query({
      query: id => `/boards/${id}`,
    }),
  }),
});

export const { useGetBoardsQuery, useGetSelectedBoardQuery } = apiSlice;
