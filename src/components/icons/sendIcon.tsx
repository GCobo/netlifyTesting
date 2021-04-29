import React from 'react';
import { IconProps } from './model';

export const SendIcon = ({ className }: IconProps) => {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' className={className}>
      <g id='basic--external_link'>
        <g id='basic--external_link'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='basic--external_link-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M13.9971 3.41421L13.9971 7L15.9971 7L15.9971 0L8.9971 0L8.9971 2L12.5829 2L6.28999 8.29289L7.70421 9.70711L13.9971 3.41421ZM15 10L13 10L13 14L2 14L2 3L6 3L6 1L2 1C0.89543 1 0 1.89543 0 3L0 14C0 15.1046 0.89543 16 2 16L13 16C14.1046 16 15 15.1046 15 14L15 10Z'
              transform='translate(4.001465 4)'
              id='basic--external_link'
              fill='#2E3A59'
              fillRule='evenodd'
              stroke='none'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
