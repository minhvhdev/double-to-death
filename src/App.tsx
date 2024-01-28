import { Suspense } from 'react';

import { RouterProvider } from 'react-router-dom';

import { AddNameModal } from '@common/components/molecules';
import router from './routers';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
      <AddNameModal />
    </Suspense>
  );
};

export default App;
