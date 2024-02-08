import { RouteObject } from 'react-router-dom';

import { TGamePaths } from '@common/types';

export const doNothing = () => {};

export const genGameRouterExport = (routeObject: RouteObject) => {
  const HOME = routeObject.path as string;
  const ROUTERS: Record<TGamePaths, string> = {
    HOME,
    SINGLE: '',
    CREATE: '',
    ROOM: '',
  };

  (routeObject.children as RouteObject[]).forEach(({ path }) => {
    ROUTERS[(path as string).toUpperCase() as TGamePaths] =
      `/games/${HOME}/${path}`;
  });
  return ROUTERS;
};
