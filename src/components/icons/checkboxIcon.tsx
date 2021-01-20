import React from 'react';
import { IconProps } from './model';

export const CheckboxIcon = ({ className }: IconProps) => {
  return (
    <svg width='16' height='16' viewBox='0 0 24 24' className={className}>
      <path d='M20.571 24h-17.143c-1.894 0-3.429-1.535-3.429-3.429v-17.143c0-1.894 1.535-3.429 3.429-3.429h17.143c1.894 0 3.429 1.535 3.429 3.429v17.143c0 1.894-1.535 3.429-3.429 3.429zM3.429 3.429v17.143h17.143v-17.143h-17.143z'></path>
    </svg>
  );
};
