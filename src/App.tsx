import { Suspense, useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';

import { AddNameModal } from '@common/components/molecules';
import { ETheme } from '@common/enums';
import { useSelector } from '@common/redux/store';
import router from './routers';

const App = () => {
  const { theme } = useSelector((state) => state.config);

  useEffect(() => {
    if (theme === ETheme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
      <AddNameModal />
    </Suspense>
  );
};

export default App;
