import React from 'react';
import { IconProps } from '../model';

export const CommentIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M13.333 5.333v2.667h2.667v2.667h-2.667v2.667h-2.667v-2.667h-2.667v-2.667h2.667v-2.667h2.667zM2.667 0h18.667c1.471 0 2.667 1.196 2.667 2.667v13.333c0 1.471-1.196 2.667-2.667 2.667h-13.334c-0.577 0-1.138 0.187-1.6 0.533l-6.4 4.8v-21.333c0-1.471 1.196-2.667 2.667-2.667zM7.111 16h14.222v-13.333h-18.667v16l2.845-2.133c0.462-0.346 1.023-0.533 1.6-0.533z'></path>
    </svg>
  );
};
