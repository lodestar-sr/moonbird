import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const LockIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.2857 19.4286H7.71429C7.25963 19.4286 6.82359 19.248 6.5021 18.9265C6.18061 18.605 6 18.1689 6 17.7143V11.7143C6 11.2596 6.18061 10.8236 6.5021 10.5021C6.82359 10.1806 7.25963 10 7.71429 10H16.2857C16.7404 10 17.1764 10.1806 17.4979 10.5021C17.8194 10.8236 18 11.2596 18 11.7143V17.7143C18 18.1689 17.8194 18.605 17.4979 18.9265C17.1764 19.248 16.7404 19.4286 16.2857 19.4286Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.57153 10V7.42857C8.57153 6.51926 8.93276 5.64719 9.57574 5.00421C10.2187 4.36122 11.0908 4 12.0001 4C12.9094 4 13.7815 4.36122 14.4245 5.00421C15.0675 5.64719 15.4287 6.51926 15.4287 7.42857V10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Icon>
);
