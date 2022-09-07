import React, { FC } from 'react';
import classnames from 'classnames';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'success' | 'warning' | 'danger';
}

export const Button: FC<IButtonProps> = ({
  className,
  theme = 'primary',
  type = 'button',
  children,
  ...props
}) => (
  <button
    className={classnames('btn', `btn-${theme}`, className)}
    type={type}
    {...props}
  >
    {children}
  </button>
);
