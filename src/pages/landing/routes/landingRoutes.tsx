import React from 'react';
import { RouteObject } from 'react-router-dom';
import { HomePage, ToursPage } from './landingPages.ts';

export const LandingRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <React.Suspense>
        <HomePage />
      </React.Suspense>
    ),
    handle: {
      label: 'Home',
    },
  },
  {
    path: '/tours',
    element: (
      <React.Suspense>
        <ToursPage />
      </React.Suspense>
    ),
    handle: {
      label: 'Tours',
    },
  },
];
