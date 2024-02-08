import { RouteObject } from 'react-router-dom';

import { genGameRouterExport } from '@common/helpers';
import { BjLobbyPage } from '@bj/components/pages';

const blackJackRoutes: RouteObject = {
  path: 'black-jack',
  Component: BjLobbyPage,
  children: [
    { path: 'single', Component: BjLobbyPage },
    { path: 'create', Component: BjLobbyPage },
    { path: 'room', Component: BjLobbyPage },
  ],
};

export const BJ_ROUTERS = genGameRouterExport(blackJackRoutes);

export default blackJackRoutes;
