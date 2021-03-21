import React from 'react';
import { IconProps } from './model';

export const LinkIcon = ({ className }: IconProps) => {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' className={className}>
      <defs>
        <path d='M0 0L24 0L24 24L0 24L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='basic--link-2'>
        <g id='basic--link'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='basic--link-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M7.2 10L4.5 10C2.01472 10 0 7.76142 0 5C0 2.23858 2.01472 0 4.5 0L7.2 0L7.2 2L4.5 2C3.00883 2 1.8 3.34315 1.8 5C1.8 6.65685 3.00883 8 4.5 8L7.2 8L7.2 10ZM10.8 0L13.5 0C15.9853 0 18 2.23858 18 5C18 7.76142 15.9853 10 13.5 10L10.8 10L10.8 8L13.5 8C14.9912 8 16.2 6.65685 16.2 5C16.2 3.34315 14.9912 2 13.5 2L10.8 2L10.8 0ZM4.5 4L4.5 6L13.5 6L13.5 4L4.5 4Z'
              transform='translate(2 7)'
              id='basic--link'
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
