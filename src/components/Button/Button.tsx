import React from 'react';
import styles from './Button.module.scss';

type ButtonColor = 'orange' | 'red' | 'green';
interface ButtonProps extends React.ComponentProps<'button'> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: ButtonColor;
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', children, color = 'green', onClick, ...props }, ref) => {
    return (
      <button
        className={`${styles.button} ${styles[color]}`}
        type={type}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
