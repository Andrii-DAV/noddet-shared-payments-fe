import { createApi } from '@reduxjs/toolkit/query/react';
import { baseUrl, DBResponse } from '../utils.ts';

export type UserRole = 'user' | 'guide' | 'lead-guide' | 'admin';
export interface User {
  name: string;
  email: string;
  _id: string;
  role: UserRole;
  passwordChangedAt?: Date;
  photo?: string;
}

interface UserRes extends DBResponse<User> {
  token: string;
}
interface SignInPayload {
  email: string;
  password: string;
}
interface SignUpPayload extends SignInPayload {
  name: string;
  passwordConfirm: string;
}
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    signup: builder.mutation<UserRes, SignUpPayload>({
      query: (payload) => ({
        method: 'POST',
        url: 'users/signup',
        body: payload,
      }),
    }),
    login: builder.mutation<UserRes, SignInPayload>({
      query: (payload) => ({
        method: 'POST',
        url: 'users/login',
        body: payload,
      }),
    }),
    logout: builder.query<unknown, unknown>({
      query: () => ({
        method: 'GET',
        url: 'users/logout',
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLazyLogoutQuery } =
  authApi;
