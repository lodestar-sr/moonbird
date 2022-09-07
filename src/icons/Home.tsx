import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const HomeIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={28} baseHeight={28} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M4.66663 11.2368L14 3.5L23.3333 11.2368V24.5H4.66663V11.2368Z"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M15.1667 15.1667H12.8333C12.2145 15.1667 11.621 15.4125 11.1834 15.8501C10.7458 16.2877 10.5 16.8812 10.5 17.5V24.5H17.5V17.5C17.5 16.8812 17.2542 16.2877 16.8166 15.8501C16.379 15.4125 15.7855 15.1667 15.1667 15.1667Z"
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
