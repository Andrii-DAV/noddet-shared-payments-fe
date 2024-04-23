import { authApi, User } from './auth.api.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersApi } from '../users/users.api.ts';

interface AuthState {
  user: User | null;
  jwt: string | null;
}

const initialState: AuthState = {
  user: null,
  jwt: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setJWT: (state, { payload }: PayloadAction<string>) => {
      state.jwt = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints?.signup.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data;
        state.jwt = payload.token;
        localStorage.setItem('jwt', payload.token);
      }
    );
    builder.addMatcher(
      authApi.endpoints?.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data;
        state.jwt = payload.token;
        localStorage.setItem('jwt', payload.token);
      }
    );
    builder.addMatcher(authApi.endpoints?.logout.matchFulfilled, (state) => {
      state.user = null;
      state.jwt = null;
      localStorage.removeItem('jwt');
    });
    builder.addMatcher(
      usersApi.endpoints?.profile.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data;
      }
    );
  },
});

export const { setJWT } = authSlice.actions;
export default authSlice.reducer;
