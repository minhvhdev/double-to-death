import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@common/components/pages';

const blackJackRoutes: RouteObject = {
  path: 'black-jack',
  children: [],
};

const phomRoutes: RouteObject = {
  path: 'phom',
  children: [],
};

const gameRoutes: RouteObject = {
  path: '/games',
  children: [blackJackRoutes, phomRoutes],
};

const commonRoutes: RouteObject = {
  path: '/',
  Component: HomePage,
  children: [gameRoutes],
};

const router = createBrowserRouter([commonRoutes]);

export default router;
