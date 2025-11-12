import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import { APP_ROUTES, DEFAULT_HOME_PATH } from '../constants/routes'

const Login = lazy(() => import('../views/Login'))
const Home = lazy(() => import('../views/Home'))
const Layout = lazy(() => import('../Layout'))

const routes: RouteObject[] = [
  {
    path: APP_ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: APP_ROUTES.LAYOUT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={APP_ROUTES.HOME} replace />,
      },
      {
        path: APP_ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={DEFAULT_HOME_PATH} replace />,
  },
]

export default routes

