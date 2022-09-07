import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ChevronRightIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={16} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 24"
        fill="none"
      >
        <path
          d="M8 5L15 12L8 19"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Icon>
);
