import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const LandingPage = lazy(() => import('@/pages/LandingPage'))
const ConnectPage = lazy(() => import('@/pages/ConnectPage'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const fallbackLoader = (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-brand-purple border-t-transparent animate-spin" />
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={fallbackLoader}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: 'connect',
        element: (
          <Suspense fallback={fallbackLoader}>
            <ConnectPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={fallbackLoader}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
])

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />
}
