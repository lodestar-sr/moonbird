import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const ChevronLeftIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={28} baseHeight={28} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M17.4999 5.83334L9.33325 14L17.4999 22.1667"
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
