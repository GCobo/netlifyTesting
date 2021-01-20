import React from 'react';
import { IconProps } from './model';

export const AddIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M16.8 24h-14.4c-1.325 0-2.4-1.074-2.4-2.4v-14.4h2.4v14.4h14.4v2.4zM21.6 19.2h-14.4c-1.326 0-2.4-1.075-2.4-2.4v-14.4c0-1.325 1.075-2.4 2.4-2.4h14.4c1.326 0 2.4 1.075 2.4 2.4v14.4c0 1.326-1.074 2.4-2.4 2.4zM7.2 2.4v14.4h14.4v-14.4h-14.4zM15.6 14.4h-2.4v-3.6h-3.6v-2.4h3.6v-3.6h2.4v3.6h3.6v2.4h-3.6v3.6z'></path>
    </svg>
  );
};
