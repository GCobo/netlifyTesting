import React from 'react';
import { IconProps } from './model';

export const PlusCircleIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M12 24c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12-0.007 6.624-5.376 11.993-12 12zM2.4 12.206c0.057 5.281 4.369 9.525 9.651 9.497s9.548-4.318 9.548-9.6-4.267-9.571-9.548-9.6c-5.282-0.028-9.594 4.215-9.651 9.497v0.206zM13.2 18h-2.4v-4.8h-4.8v-2.4h4.8v-4.8h2.4v4.8h4.8v2.4h-4.8v4.8z'></path>
    </svg>
  );
};
