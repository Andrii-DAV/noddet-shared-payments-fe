import React, { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../pages/auth/routes/authRoutes.tsx';
import { LandingRoutes } from '../pages/landing/routes/landingRoutes.tsx';

const AuthLayout = lazy(() => import('../layouts/auth/'));
const LandingLayout = lazy(() => import('../layouts/landing'));
export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingLayout />,
      children: LandingRoutes,
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: AuthRoutes,
    },
    {
      path: '*',
      element: <h1>Not found!</h1>,
    },
  ]);
  return (
    <React.Suspense>
      <RouterProvider router={router} />
    </React.Suspense>
  );
};
