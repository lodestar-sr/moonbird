import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const PersonalIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={20} baseHeight={20} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15.0001 10H13.591C13.5136 10 13.4379 10.0215 13.3721 10.0621C13.3063 10.1028 13.2531 10.1609 13.2185 10.23L12.0393 12.5875C12.0046 12.6566 11.9515 12.7147 11.8857 12.7554C11.8199 12.796 11.7441 12.8175 11.6668 12.8175C11.5895 12.8175 11.5137 12.796 11.4479 12.7554C11.3821 12.7147 11.3289 12.6566 11.2943 12.5875L8.69179 7.38417C8.65767 7.31599 8.6055 7.25848 8.54096 7.21789C8.47642 7.17731 8.40198 7.15522 8.32575 7.15401C8.24951 7.15281 8.17441 7.17255 8.10862 7.21107C8.04283 7.2496 7.98887 7.30543 7.95262 7.3725L6.65346 9.78084C6.61767 9.84694 6.56473 9.90218 6.50021 9.94075C6.43568 9.97932 6.36196 9.99978 6.28679 10H2.50012"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.93591 7.5C3.96675 4.58917 6.73591 2.5 10.0001 2.5C11.9892 2.5 13.8969 3.29018 15.3034 4.6967C16.7099 6.10322 17.5001 8.01088 17.5001 10C17.5001 11.9891 16.7099 13.8968 15.3034 15.3033C13.8969 16.7098 11.9892 17.5 10.0001 17.5C6.73591 17.5 3.96675 15.4108 2.93591 12.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Icon>
);
