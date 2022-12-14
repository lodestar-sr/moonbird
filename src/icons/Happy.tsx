import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const HappyIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={20} baseHeight={20} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15.3035 4.69667C15.9999 5.39311 16.5524 6.21991 16.9293 7.12986C17.3062 8.0398 17.5002 9.01508 17.5002 10C17.5002 10.9849 17.3062 11.9602 16.9293 12.8701C16.5524 13.7801 15.9999 14.6069 15.3035 15.3033C14.6071 15.9998 13.7803 16.5522 12.8703 16.9291C11.9604 17.3061 10.9851 17.5 10.0002 17.5C9.01525 17.5 8.03997 17.3061 7.13002 16.9291C6.22008 16.5522 5.39328 15.9998 4.69683 15.3033C3.2903 13.8968 2.50012 11.9891 2.50012 10C2.50012 8.01086 3.2903 6.1032 4.69683 4.69667C6.10337 3.29014 8.01103 2.49995 10.0002 2.49995C11.9893 2.49995 13.897 3.29014 15.3035 4.69667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9168 12.24C12.9168 12.24 11.8227 13.3333 10.0002 13.3333C8.17683 13.3333 7.0835 12.24 7.0835 12.24"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Icon>
);
