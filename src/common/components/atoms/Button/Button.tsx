import React from 'react';

import { twMerge } from 'tailwind-merge';

import { rippleEffect } from '@common/helpers';
import { TClickButton, TReactChild, TReactHTMLButton } from '@common/types';
import styles from './Button.css';

type Props = TReactHTMLButton & {
  children: TReactChild;
  width?: number;
  height?: number;
  fontSize?: number;
  color?: 'primary' | 'transparent' | 'danger' | 'warning' | 'info';
};

const Button = React.memo((props: Props) => {
  const {
    children,
    className = '',
    width,
    height,
    fontSize,
    color,
    onClick,
    ...args
  } = props;
  const handleClick: TClickButton = (e) => {
    rippleEffect(e);
    onClick && onClick(e);
  };

  const style = {
    width: width ? width + 'rem' : '',
    height: height ? height + 'rem' : '',
    fontSize: fontSize ? fontSize + 'rem' : '',
  };

  const colorClass = color ? color : 'primary';

  return (
    <button
      type="button"
      className={twMerge(`${styles.button} ${colorClass} ${className}`)}
      onClick={handleClick}
      style={style}
      {...args}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';

export default Button;
