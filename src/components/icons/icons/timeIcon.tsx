import React from 'react';
import { IconProps } from '../model';

export const TimeIcon = ({ className }: IconProps) => {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' className={className}>
      <g id='calendar--calendar'>
        <g id='time'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='Background'
            fill='none'
            fill-rule='evenodd'
            stroke='none'
          />
          <g>
            <path
              d='M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0L9 0ZM9 16.125C5.1 16.125 1.875 12.9 1.875 9C1.875 5.1 5.1 1.875 9 1.875C12.9 1.875 16.125 5.1 16.125 9C16.125 12.9 12.9 16.125 9 16.125L9 16.125Z'
              transform='translate(3 3)'
              id='Shape'
              fillRule='evenodd'
              stroke='none'
            />
            <path
              d='M1.95 5.7L1.95 0.975C1.95 0.45 1.5 0 0.975 0C0.45 0 0 0.45 0 0.975L0 6.075C0 6.3 0.0750003 6.6 0.3 6.75L2.4 8.85C2.55 9 2.85 9.15 3.075 9.15C3.3 9.15 3.525 9.075 3.75 8.85C4.125 8.475 4.125 7.875 3.75 7.5L1.95 5.7L1.95 5.7Z'
              transform='translate(11.025009 5.9249268)'
              id='Shape'
              fillRule='evenodd'
              stroke='none'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
