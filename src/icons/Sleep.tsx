import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const SleepIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={20} baseHeight={20} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clipPath="url(#clip0_4030_5384)">
          <path
            d="M11.6667 4.99999V3.33333"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8334 4.16666H12.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8334 5.83333V9.16666"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5001 7.49999H14.1667"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5059 13.3325C13.9211 14.763 12.8575 15.9459 11.497 16.679C10.1365 17.4121 8.5636 17.6498 7.04723 17.3515C5.53086 17.0532 4.16521 16.2374 3.18378 15.0436C2.20236 13.8498 1.66612 12.3521 1.66675 10.8067C1.66675 7.31832 4.34592 4.45999 7.75842 4.16666C6.05925 6.50499 6.25758 9.79249 8.36592 11.9008C9.15396 12.6884 10.1466 13.2398 11.2316 13.4928C12.3166 13.7458 13.4508 13.6903 14.5059 13.3325Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4030_5384">
            <rect width="20" height="20" fill={color} />
          </clipPath>
        </defs>
      </svg>
    )}
  </Icon>
);
