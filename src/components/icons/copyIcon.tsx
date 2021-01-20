import React from 'react';
import { IconProps } from './model';

export const CopyIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M2.305 13.149l-2.128 1.655 11.823 9.195 11.823-9.195-2.141-1.668-9.695 7.54-9.681-7.527zM21.668 10.864l2.154-1.668-11.823-9.195-11.823 9.195 2.141 1.668 9.681 7.527 9.668-7.527z'></path>
    </svg>
  );
};
