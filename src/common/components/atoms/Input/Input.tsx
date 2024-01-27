import { twMerge } from 'tailwind-merge';

import { TReactHTMLInput } from '@common/types';
import styles from './Input.css';

type Props = TReactHTMLInput & {
  width?: number;
  height?: number;
};

const Input = (props: Props) => {
  const { className, width, height, ...args } = props;
  const style = {
    height: height ? height + 'rem' : 'fit-content',
    width: width ? width + 'rem' : '100%',
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
