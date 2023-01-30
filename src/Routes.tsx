import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
export const router: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  // {
  //   path: "/users",
  //   element: <Users />,
  //   children: [
  //     { path: ":id", element: <Profile /> },
  //     { path: "/settings", element: <Settings /> },
  //   ],
  // },
]
