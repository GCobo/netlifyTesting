import React from 'react';
import { IconProps } from './model';

export const SpainIcon = ({ className }: IconProps) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24'>
      <path
        fill='#ffda44'
        d='M0 12c0 1.467 0.262 2.873 0.75 4.172l11.25 1.045 11.25-1.045c0.475-1.24 0.75-2.674 0.75-4.172s-0.275-2.932-0.778-4.254l0.027 0.082-11.25-1.045-11.25 1.045c-0.475 1.24-0.75 2.673-0.75 4.172 0 0 0 0 0 0v0z'
      ></path>
      <path
        fill='#d80027'
        d='M23.25 7.828c-1.746-4.608-6.122-7.824-11.25-7.824s-9.504 3.216-11.223 7.742l-0.027 0.082h22.5zM0.75 16.172c1.746 4.608 6.122 7.824 11.25 7.824s9.504-3.216 11.223-7.742l0.027-0.082h-22.5z'
      ></path>
    </svg>
  );
};
