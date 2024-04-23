import { createApi } from '@reduxjs/toolkit/query/react';
import { baseUrl, DBResponse } from '../utils.ts';
import { User } from '../auth/auth.api.ts';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseUrl,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    profile: builder.query<DBResponse<User>, undefined>({
      query: () => ({
        method: 'GET',
        url: 'users/profile',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const { useLazyProfileQuery } = usersApi;
