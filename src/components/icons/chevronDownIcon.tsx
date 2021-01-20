import React from 'react';
import { IconProps } from './model';

export const ChevronDownIcon = ({ className }: IconProps) => {
  return (
    <svg width='12' height='12' viewBox='0 0 24 24' className={className}>
      <path d='M12 19.413l12-12-2.821-2.825-9.179 9.185-9.177-9.185-2.823 2.823 12 12.002z'></path>
    </svg>
  );
};
