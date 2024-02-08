import React, { useEffect } from 'react';

import { Moon, Sun } from '@phosphor-icons/react';

import { ETheme } from '@common/enums';
import { actSwitchTheme } from '@common/redux/slices/config.slice';
import { useDispatch, useSelector } from '@common/redux/store';

import { Button } from '..';

const SwitchTheme = React.memo(() => {
  const { theme } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const handleSwitchTheme = () => dispatch(actSwitchTheme());

  return (
    <Button
      title="switch-theme"
      icon
      w={36}
      h={36}
      fs={20}
      onClick={handleSwitchTheme}
    >
      {theme === ETheme.LIGHT ? <Sun /> : <Moon />}
    </Button>
  );
});
SwitchTheme.displayName = 'SwitchTheme';

export default SwitchTheme;
