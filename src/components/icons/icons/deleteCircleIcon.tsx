import React from 'react';
import { IconProps } from '../model';

export const DeleteCircleIcon = ({ className }: IconProps) => {
  return (
    <svg viewBox='0 0 32 32' className={className}>
      <path
        d='M23,4H9A5,5,0,0,0,4,9V23a5,5,0,0,0,5,5H23a5,5,0,0,0,5-5V9A5,5,0,0,0,23,4ZM20,17H12a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z'
        data-name='Layer 5'
      />
    </svg>
  );
};
