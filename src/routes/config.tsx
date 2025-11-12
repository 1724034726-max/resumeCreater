import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from '../Layout'
import { AppRoutes, DEFAULT_HOME_PATH } from '../contants/routes'

const Login = lazy(() => import('../views/Login'))
const Home = lazy(() => import('../views/Home'))

const routes: RouteObject[] = [
  {
    path: AppRoutes.LOGIN,
    element: <Login />,
  },
  {
    path: AppRoutes.LAYOUT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={AppRoutes.HOME} replace />,
      },
      {
        path: AppRoutes.HOME,
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

