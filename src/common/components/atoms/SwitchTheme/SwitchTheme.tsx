import { IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, Sun } from '@phosphor-icons/react';

import { THEME } from '@common/constants';

const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Change theme"
      onClick={toggleColorMode}
      icon={colorMode === THEME.LIGHT ? <Sun /> : <Moon />}
      fontSize={'1.5rem'}
      variant='solid'
    />
  );
};

export default SwitchTheme;
