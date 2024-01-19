import {
  Colors,
  StyleProps,
  ThemeConfig,
  extendTheme,
  StyleConfig,
  ComponentStyleConfig,
  StyleFunctionProps,
  ChakraTheme,
  ThemeComponents,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const ComponentStyle: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: ({ colorMode }: StyleFunctionProps) => ({
    textColor: colorMode === 'light' ? '#2d2b29' : '#eff2fa',
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      // color: mode('gray.800', 'whiteAlpha.900')(props),
      // bg: mode('gray.100', '#141214')(props),
    },
  }),
};

const components = {
  Button: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#2d2b29', '#eff2fa')(props),
      textColor: mode('#2d2b29', '#eff2fa')(props),
    }),
  },
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: StyleFunctionProps) => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
};
const chakraTheme = extendTheme({
  config,
  components,
  styles,
});

export default chakraTheme;
