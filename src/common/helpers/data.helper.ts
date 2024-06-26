import CryptoJS from 'crypto-js';
import { parse, stringify } from 'flatted';

import { TIME_OUT } from '@common/constants';

const SECRET_KEY = import.meta.env.VITE_CRYPTO_SECRET_KEY as string;

export const genId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 5);
  return `${timestamp}-${randomPart}`;
};

export const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const encrypt = (data: unknown): string => {
  return CryptoJS.AES.encrypt(stringify(data), SECRET_KEY).toString();
};

export const decrypt = (data: string): unknown => {
  const decrypt = CryptoJS.AES.decrypt(String(data), SECRET_KEY).toString(
    CryptoJS.enc.Utf8,
  );
  return parse(decrypt);
};

export const combineWithoutOrder = <T>(arr: T[], numWays: number): T[][] => {
  const combinations: T[][] = [];
  const helper = (temp: T[], start: number) => {
    if (temp.length === numWays) {
      combinations.push(temp.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      helper(temp, i);
      temp.pop();
    }
  };
  helper([], 0);
  return combinations;
};

export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  waitFor = TIME_OUT.DEBOUNCING,
) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise((resolve) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
};
