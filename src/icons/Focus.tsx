import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const FocusIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={20} baseHeight={20} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M14.1251 5.875C15.2192 6.96902 15.8338 8.45282 15.8338 10C15.8338 11.5472 15.2192 13.031 14.1251 14.125C13.0311 15.219 11.5473 15.8336 10.0001 15.8336C8.45296 15.8336 6.96915 15.219 5.87514 14.125C4.78112 13.031 4.1665 11.5472 4.1665 10C4.1665 8.45282 4.78112 6.96902 5.87514 5.875C6.96915 4.78098 8.45296 4.16637 10.0001 4.16637C11.5473 4.16637 13.0311 4.78098 14.1251 5.875"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0001 17.5V14.1667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0001 2.5V5.83333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83346 10H2.50012"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5001 10H14.1667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Icon>
);
