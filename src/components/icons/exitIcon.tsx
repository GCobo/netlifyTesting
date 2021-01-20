import React from 'react';
import { IconProps } from './model';

export const ExitIcon = ({ className }: IconProps) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24'>
      <path d='M21.333 24h-18.667c-1.473 0-2.667-1.194-2.667-2.667v-5.333h2.667v5.333h18.667v-18.667h-18.667v5.333h-2.667v-5.333c0-1.473 1.194-2.667 2.667-2.667h18.667c1.473 0 2.667 1.194 2.667 2.667v18.667c0 1.473-1.194 2.667-2.667 2.667zM10.667 17.333v-4h-10.667v-2.667h10.667v-4l6.667 5.333-6.667 5.333z'></path>
    </svg>
  );
};
