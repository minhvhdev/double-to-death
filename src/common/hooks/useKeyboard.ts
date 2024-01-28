import { useEffect } from 'react';

import { TIME_OUT } from '@common/constants';
import { doNothing } from '@common/helpers';

type Callback = (event: KeyboardEvent) => void;

const useKeyboard = (
  key: string,
  callback: Callback = doNothing,
  isAsync: boolean = false,
  delay: number = TIME_OUT.DEBOUNCING,
) => {
  useEffect(() => {
    const handlePressKey = (event: KeyboardEvent) => {
      if (event.key !== key) return;
      if (isAsync) {
        setTimeout(() => {
          callback(event);
        }, delay);
        return;
      }
      callback(event);
    };

    window.addEventListener('keydown', handlePressKey);
    return () => {
      window.removeEventListener('keydown', handlePressKey);
    };
  }, [key, callback, isAsync, delay]);
};

export default useKeyboard;
