import React from 'react';
import { IconProps } from './model';

export const UserIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M18.353 6.349c0 3.524-2.826 6.35-6.353 6.35-3.526 0-6.353-2.826-6.353-6.35s2.827-6.349 6.353-6.349c3.527 0 6.353 2.825 6.353 6.349zM12 24c-5.205 0-9.6-0.846-9.6-4.11 0-3.265 4.422-4.081 9.6-4.081 5.206 0 9.6 0.846 9.6 4.11 0 3.265-4.422 4.081-9.6 4.081z'></path>
    </svg>
  );
};
