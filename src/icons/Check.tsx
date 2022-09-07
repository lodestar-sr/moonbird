import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const CheckIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.3771 7L9.76706 16.61L4 10.8429"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Icon>
);
