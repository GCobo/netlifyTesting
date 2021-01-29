import React from 'react';
import { IconProps } from './model';

export const GoBackIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M5.745 10.5l5.37-5.385-2.115-2.115-9 9 9 9 2.115-2.115-5.37-5.385h18.255v-3h-18.255z'></path>
    </svg>
  );
};
