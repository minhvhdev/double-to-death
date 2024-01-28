import React from 'react';

import { twMerge } from 'tailwind-merge';

import { pxToRem, rippleEffect } from '@common/helpers';
import { TClickButton, TReactChild, TReactHTMLButton } from '@common/types';
import styles from './Button.css';

type Props = TReactHTMLButton & {
  children: TReactChild;
  width?: number;
  height?: number;
  fontSize?: number;
  color?: 'primary' | 'transparent' | 'danger' | 'warning' | 'info' | 'outline';
  icon?: boolean;
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
    icon,
    ...args
  } = props;

  const handleClick: TClickButton = (e) => {
    rippleEffect(e);
    onClick?.(e);
  };

  const style = {
    width: pxToRem(width),
    height: pxToRem(height),
    fontSize: pxToRem(fontSize),
    padding: icon ? '0' : '',
  };

  return (
    <button
      type="button"
      className={twMerge(`${styles.button} ${color ?? 'primary'} ${className}`)}
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
