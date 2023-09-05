import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IBoard, ISubtask, ITask } from './types';

export const doitApi = createApi({
  reducerPath: 'doitApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: builder => ({
    getBoards: builder.query({
      query: () => 'http://localhost:3000/boards',
    }),
  }),
});

export const { useGetBoardsQuery } = doitApi;
