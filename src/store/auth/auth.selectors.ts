import { RootState } from '../store.ts';

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectJWT = (state: RootState) => state.auth.jwt;
