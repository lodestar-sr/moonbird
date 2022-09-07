import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const StatsIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={28} baseHeight={28} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M10.5 15.1667V24.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.5 9.33334V24.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 3.5V24.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 9.33334V24.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Icon>
);
