import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const SettingsIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={28} baseHeight={28} {...props}>
    {(width, height, color) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M10.5 14C10.5 13.0717 10.8687 12.1815 11.5251 11.5251C12.1815 10.8687 13.0717 10.5 14 10.5C14.9283 10.5 15.8185 10.8687 16.4749 11.5251C17.1313 12.1815 17.5 13.0717 17.5 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 14C10.5 13.0717 10.8687 12.1815 11.5251 11.5251C12.1815 10.8687 13.0717 10.5 14 10.5C14.9283 10.5 15.8185 10.8687 16.4749 11.5251C17.1313 12.1815 17.5 13.0717 17.5 14"
          stroke="#ADB5BD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 14C17.5 14.9283 17.1313 15.8185 16.4749 16.4749C15.8185 17.1313 14.9283 17.5 14 17.5C13.0717 17.5 12.1815 17.1313 11.5251 16.4749C10.8687 15.8185 10.5 14.9283 10.5 14"
          stroke="#ADB5BD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.75 14C22.75 13.615 22.715 13.23 22.6684 12.8567L24.7264 11.2467C24.9475 11.0739 25.0987 10.827 25.1521 10.5514C25.2055 10.2759 25.1575 9.9904 25.0169 9.74751L23.1864 6.58118C23.0462 6.3388 22.8234 6.1551 22.5587 6.06381C22.294 5.97251 22.0053 5.97974 21.7455 6.08418L19.9069 6.82268C19.7264 6.89192 19.5317 6.916 19.3397 6.89282C19.1478 6.86964 18.9644 6.7999 18.8055 6.68968C18.5221 6.5004 18.2271 6.32896 17.9224 6.17634C17.7483 6.09356 17.5969 5.96971 17.4813 5.81546C17.3656 5.66121 17.2892 5.48117 17.2585 5.29084L16.9774 3.33084C16.9375 3.05387 16.7992 2.80056 16.5877 2.61734C16.3762 2.43413 16.1057 2.3333 15.8259 2.33334H12.173C11.8932 2.33362 11.6229 2.43474 11.4116 2.61816C11.2004 2.80159 11.0623 3.05503 11.0227 3.33201L10.7404 5.29318C10.7099 5.48295 10.6339 5.66252 10.5189 5.81653C10.4039 5.97053 10.2533 6.09439 10.08 6.17751C9.7747 6.33285 9.47864 6.5058 9.19338 6.69551C9.03497 6.80484 8.85218 6.87371 8.66101 6.89608C8.46983 6.91845 8.27609 6.89365 8.09671 6.82384L6.25338 6.08418C5.99358 5.98 5.70495 5.97289 5.44034 6.06416C5.17573 6.15544 4.95286 6.33898 4.81254 6.58118L2.98204 9.74868C2.84192 9.99158 2.79426 10.2769 2.84786 10.5522C2.90145 10.8275 3.05269 11.0741 3.27371 11.2467L5.33171 12.8567C5.28504 13.23 5.25004 13.615 5.25004 14"
          stroke="#ADB5BD"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.75 14C22.75 14.385 22.715 14.77 22.6684 15.1433L24.7264 16.7533C24.9475 16.9261 25.0987 17.1731 25.1521 17.4486C25.2055 17.7241 25.1574 18.0096 25.0169 18.2525L23.1864 21.4188C23.0462 21.6612 22.8233 21.8449 22.5587 21.9362C22.294 22.0275 22.0053 22.0203 21.7455 21.9158L19.9068 21.1773C19.7263 21.1081 19.5316 21.084 19.3397 21.1072C19.1477 21.1304 18.9644 21.2001 18.8055 21.3103C18.5221 21.4996 18.2271 21.6711 17.9224 21.8237C17.7482 21.9065 17.5969 22.0303 17.4812 22.1846C17.3656 22.3388 17.2892 22.5188 17.2585 22.7092L16.9774 24.6692C16.9375 24.9461 16.7991 25.1995 16.5876 25.3827C16.3761 25.5659 16.1057 25.6667 15.8258 25.6667H12.173C11.893 25.6667 11.6224 25.5657 11.4109 25.3822C11.1994 25.1988 11.0611 24.9452 11.0215 24.668L10.7404 22.7057C10.7097 22.5161 10.6336 22.3368 10.5187 22.183C10.4037 22.0292 10.2532 21.9055 10.08 21.8225C9.77451 21.667 9.47844 21.4937 9.19335 21.3033C9.03477 21.1944 8.85201 21.1257 8.66091 21.1034C8.46981 21.081 8.27614 21.1056 8.09668 21.175L6.25335 21.9147C5.99355 22.0188 5.70492 22.026 5.44031 21.9347C5.17571 21.8434 4.95283 21.6599 4.81252 21.4177L2.98202 18.2513C2.84144 18.0084 2.79342 17.7229 2.84681 17.4474C2.90019 17.1719 3.05139 16.925 3.27252 16.7522L5.33052 15.1422C5.28062 14.7634 5.25374 14.382 5.25002 14"
          stroke="#ADB5BD"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Icon>
);