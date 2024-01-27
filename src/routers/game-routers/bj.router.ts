import { RouteObject } from "react-router-dom";

import { BjLobbyPage } from "@bj/components/pages";

const blackJackRoutes: RouteObject = {
  path: 'black-jack',
  Component: BjLobbyPage,
  children: [],
};

export default blackJackRoutes