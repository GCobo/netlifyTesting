import React from 'react';
import { IconProps } from './model';

export const CalendarIcon = ({ className }: IconProps) => {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' className={className}>
      <g id='calendar--calendar'>
        <g id='calendar--calendar'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='calendar--calendar-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g>
            <path
              d='M6 10L6 12L4 12L4 10L6 10ZM6 14L6 16L4 16L4 14L6 14ZM8 10L8 12L10 12L10 10L8 10ZM10 14L10 16L8 16L8 14L10 14ZM12 10L12 12L14 12L14 10L12 10ZM14 14L14 16L12 16L12 14L14 14ZM16 20L2 20C0.897 20 0 19.103 0 18L0 4C0 2.897 0.897 2 2 2L4 2L4 0L6 0L6 2L12 2L12 0L14 0L14 2L16 2C17.103 2 18 2.897 18 4L18 18C18 19.103 17.103 20 16 20L16 20ZM16.0001 6L16 4L2 4L2 6L16.0001 6L16.0001 6ZM16.0003 8L16.001 18L2 18L2 8L16.0003 8L16.0003 8Z'
              transform='translate(3 2)'
              id='calendar--calendar'
              fillRule='evenodd'
              stroke='none'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
