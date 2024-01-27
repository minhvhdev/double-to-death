import { RouterProvider } from 'react-router-dom';

import { AddNameModal } from '@common/components/molecules';
import router from './routers';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <AddNameModal />
    </>
  );
};

export default App;
