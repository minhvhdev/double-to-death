import { twMerge } from 'tailwind-merge';

import { pxToRem } from '@common/helpers';
import { TReactHTMLInput } from '@common/types';
import styles from './Input.css';

type Props = TReactHTMLInput & {
  width?: number;
  height?: number;
};

const Input = (props: Props) => {
  const { className, width, height, ...args } = props;

  const style = {
    height: pxToRem(height, 'fit-content'),
    width: pxToRem(width, '100%'), 
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
