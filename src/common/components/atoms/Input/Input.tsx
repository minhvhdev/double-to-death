import { twMerge } from 'tailwind-merge';

import { pxToRem } from '@common/helpers';
import { TReactHTMLInput } from '@common/types';
import styles from './Input.css';

type Props = TReactHTMLInput & {
  w?: number;
  h?: number;
};

const Input = (props: Props) => {
  const { className, w, h, ...args } = props;

  const style = {
    height: pxToRem(h, 'fit-content'),
    width: pxToRem(w, '100%'),
  };

  return (
    <input
      className={twMerge(styles.input, className)}
      style={style}
      {...args}
    />
  );
};

export default Input;
