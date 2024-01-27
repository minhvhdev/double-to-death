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

  useEffect(() => {
    if (theme === ETheme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Button title="switch-theme" onClick={handleSwitchTheme}>
      {theme === ETheme.LIGHT ? <Sun /> : <Moon />}
    </Button>
  );
});
SwitchTheme.displayName = 'SwitchTheme';

export default SwitchTheme;
