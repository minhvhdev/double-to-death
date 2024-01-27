import { RouteObject } from "react-router-dom";

import blackJackRoutes from "./bj.router";
import phomRoutes from "./phom.router";

const gameRoutes: RouteObject = {
  path: '/games',
  children: [blackJackRoutes, phomRoutes],
};

export default gameRoutes;