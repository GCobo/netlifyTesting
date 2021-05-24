import React from 'react';
import { IconProps } from './model';

export const ChevronDownIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M0.656 5.685c0.902-0.923 2.158-0.995 3.261 0l8.086 7.753 8.086-7.753c1.103-0.995 2.361-0.923 3.257 0 0.902 0.921 0.844 2.477 0 3.342-0.84 0.865-9.714 9.315-9.714 9.315-0.413 0.427-0.991 0.692-1.63 0.692s-1.218-0.265-1.63-0.692l-0.001-0.001s-8.87-8.45-9.714-9.315c-0.846-0.865-0.902-2.421 0-3.342z'></path>
    </svg>
  );
};
