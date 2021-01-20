import React from 'react';
import { IconProps } from './model';

export const PlusIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M13.714 13.714v10.286h-3.429v-10.286h-10.286v-3.429h10.286v-10.286h3.429v10.286h10.286v3.429h-10.286z'></path>
    </svg>
  );
};
