import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const BlobIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={66} baseHeight={67} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 66 67"
        fill="none"
      >
        <path
          d="M34.5893 57.8655C27.6905 58.305 21.0708 55.3395 16.4312 50.6797C11.7766 46.0239 9.1061 39.6888 9.30203 33.1553C9.50748 26.6273 12.5778 19.9255 18.1778 15.0804C23.7722 10.2449 31.8851 7.28524 38.6439 9.219C45.3971 11.1623 50.7962 17.9991 53.438 25.5702C56.0797 33.1413 55.9696 41.4371 52.3132 47.5066C48.6718 53.5719 41.4882 57.426 34.5893 57.8655Z"
          fill={color}
          opacity={0.3}
        />
        <path
          d="M12.3946 46.7403C8.90833 41.502 8.23325 34.9342 9.79501 29.1562C11.3467 23.3681 15.1251 18.3798 20.3646 15.5607C25.604 12.7517 32.2843 12.1219 38.6522 14.3311C45.01 16.5404 51.0354 21.5887 52.5871 27.7966C54.1287 34.0045 51.1966 41.3721 46.4307 46.9002C41.6649 52.4284 35.0753 56.1171 28.6267 55.9972C22.1883 55.8872 15.8808 51.9785 12.3946 46.7403Z"
          fill={color}
        />
      </svg>
    )}
  </Icon>
);