import React from 'react';
import { IconProps } from './model';

export const ApplyIcon = ({ className }: IconProps) => {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      className={className}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <path d='M0 0L24 0L24 24L0 24L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='edit--plus_circle'>
        <g id='edit--plus_circle'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='edit--plus_circle-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 0 10 0 10ZM11 11L15 11L15 9L11 9L11 5L9 5L9 9L5 9L5 11L9 11L9 15L11 15L11 11L11 11Z'
              transform='translate(2 2)'
              id='edit--plus_circle'
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
