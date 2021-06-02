import React from 'react';
import { IconProps } from '../model';

export const HomeIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M20.925 23.849h-17.85c-0.704 0-1.275-0.571-1.275-1.275v-10.2h-2.55l11.847-11.849c0.239-0.239 0.564-0.374 0.902-0.374s0.663 0.135 0.902 0.374l11.849 11.849h-2.55v10.2c0 0.704-0.571 1.275-1.275 1.275zM9.45 14.924h5.1v6.375h5.1v-10.419l-7.65-7.65-7.65 7.65v10.419h5.1v-6.375z'></path>
    </svg>
  );
};
