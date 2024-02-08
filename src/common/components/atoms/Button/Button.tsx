import React from 'react';

import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { pxToRem, rippleEffect } from '@common/helpers';
import { TClickButton, TReactChild, TReactHTMLButton } from '@common/types';
import styles from './Button.css';

type Props = TReactHTMLButton & {
  children: TReactChild;
  w?: number | string;
  h?: number | string;
  fs?: number | string;
  color?: 'primary' | 'transparent' | 'danger' | 'warning' | 'info' | 'outline';
  icon?: boolean;
  to?: string;
};

const Button = React.memo((props: Props) => {
  const {
    children,
    className = '',
    w,
    h,
    fs,
    color,
    onClick,
    icon,
    to,
    ...args
  } = props;

  const handleClick: TClickButton = (e) => {
    rippleEffect(e);
    onClick?.(e);
  };

  const style = {
    width: pxToRem(w),
    height: pxToRem(h),
    fontSize: pxToRem(fs),
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
      {to ? (
        <Link to={to} className={styles.link}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
});
Button.displayName = 'Button';

export default Button;
