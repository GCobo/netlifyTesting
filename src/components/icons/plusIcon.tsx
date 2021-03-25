import React from 'react';
import { IconProps } from './model';

export const PlusIcon = ({ className }: IconProps) => {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' className={className}>
      <defs>
        <path d='M0 0L24 0L24 24L0 24L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='edit--plus'>
        <g id='edit--plus'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='edit--plus-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M8 8L8 14L6 14L6 8L0 8L0 6L6 6L6 0L8 0L8 6L14 6L14 8L8 8Z'
              transform='translate(5 5)'
              id='edit--plus'
              fillRule='evenodd'
              stroke='none'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
