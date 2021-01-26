import React from 'react';
import { IconProps } from './model';

export const ChevronDownIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M0 7.001l12 12 12-12-2-2.001-10 10.002-10-10.002-2 2.001z'></path>
    </svg>
  );
};
