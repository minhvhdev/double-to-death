import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { chakraTheme } from './styles/themes';

const App = () => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
