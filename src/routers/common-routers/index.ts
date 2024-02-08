import { RouteObject } from 'react-router-dom';

import { HomePage } from '@common/components/pages';

const commonRoutes: RouteObject = {
  path: '/',
  Component: HomePage,
  children: [],
};

export const ROUTERS = {
  HOME: '/',
};

export default commonRoutes;
