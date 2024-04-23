import React from 'react';
import { SignIn, SignUp } from './authPages.ts';
import { type RouteObject } from 'react-router-dom';

export const AuthRoutes: RouteObject[] = [
  {
    path: '/sign-up',
    element: (
      <React.Suspense fallback="Loading..">
        <SignUp />
      </React.Suspense>
    ),
    handle: {
      label: 'Sign Up',
    },
  },
  {
    path: '/sign-in',
    element: (
      <React.Suspense fallback="Loading..">
        <SignIn />
      </React.Suspense>
    ),
    handle: {
      label: 'Sign In',
    },
  },
];
