import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store.ts';

export const baseUrl = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.jwt;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export interface DBResponse<T> {
  status: string;
  data: T;
}
