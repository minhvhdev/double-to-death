import { createBrowserRouter } from 'react-router-dom';

import commonRoutes from './common-routers';
import gameRoutes from './game-routers';

const router = createBrowserRouter([commonRoutes, gameRoutes]);

export default router;
