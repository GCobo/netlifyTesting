import React from 'react';
import { IconProps } from './model';

export const MinusIcon = ({ className }: IconProps) => {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' className={className}>
      <defs>
        <path d='M0 0L24 0L24 24L0 24L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='edit--minus'>
        <g id='edit--minus'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='edit--minus-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M0 2L0 0L14 0L14 2L0 2Z'
              transform='translate(5 11)'
              id='edit--minus'
              fillRule='evenodd'
              stroke='none'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
