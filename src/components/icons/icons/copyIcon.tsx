import React from 'react';
import { IconProps } from '../model';

export const CopyIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M8.741 19.5c-2.068 0-3.75-1.682-3.75-3.75v-9.75h-2.25c-1.243 0-2.25 1.007-2.25 2.25v13.5c0 1.243 1.007 2.25 2.25 2.25h13.5c1.243 0 2.25-1.007 2.25-2.25v-2.25h-9.75z'></path>
      <path d='M22.241-0c1.243 0 2.25 1.007 2.25 2.25v13.5c0 1.243-1.007 2.25-2.25 2.25h-13.5c-1.243 0-2.25-1.007-2.25-2.25v-13.5c0-1.243 1.007-2.25 2.25-2.25h13.5z'></path>
    </svg>
  );
};
