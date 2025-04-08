import { RouteProps } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not-found',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
}
