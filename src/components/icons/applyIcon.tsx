import React from 'react';
import { IconProps } from './model';

export const ApplyIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M0 12c0-6.624 5.376-12 12-12s12 5.376 12 12c0 6.624-5.376 12-12 12s-12-5.376-12-12c0-6.624 0 0 0 0zM13.2 13.2h4.8v-2.4h-4.8v-4.8h-2.4v4.8h-4.8v2.4h4.8v4.8h2.4v-4.8z'></path>
    </svg>
  );
};
