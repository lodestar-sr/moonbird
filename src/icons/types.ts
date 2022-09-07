import { ReactEventHandler } from 'react';

export interface IIconProps {
  className?: string;
  size?: number;
  color?: string | string[];
  onClick?: ReactEventHandler;
}

export const ICON_DEFAULT_COLORS: {
  [name: string]: string;
} = {
  white: '#FFF',
  black: '#000',
  primary: '#002FA7',
  success: '#2A5741',
  warning: '#E8A455',
  danger: '#D23629',
  gray: '#718096',
  dark: '#343A40',
  light: '#E9ECEF',
};
