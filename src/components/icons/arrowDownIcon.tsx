import React from 'react';
import { IconProps } from './model';

export const ArrowDownIcon = ({ className }: IconProps) => {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      version='1.1'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <path d='M0 0L24 0L24 24L0 24L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='arrow--caret_down'>
        <g id='arrow--caret_down'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='arrow--caret_down-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M0 5L5 10L5 0L0 5Z'
              transform='matrix(-4.371139E-08 -1 1 -4.371139E-08 7 14.5)'
              id='arrow--caret_down'
              fill='#6E768E'
              fillRule='evenodd'
              stroke='none'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
