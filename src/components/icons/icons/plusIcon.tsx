import React from 'react';
import { IconProps } from '../model';

export const PlusIcon = ({ className }: IconProps) => {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' className={className}>
      <path d='M14.203 14.236h7.582c1.228-0.027 2.216-1.016 2.216-2.245s-0.988-2.218-2.216-2.218h-7.582v-7.537c0-1.229-0.988-2.218-2.216-2.218s-2.216 0.989-2.216 2.218v7.537h-7.555c-0.587 0-1.148 0.241-1.575 0.641-0.4 0.428-0.641 0.986-0.641 1.577 0 1.229 0.988 2.218 2.216 2.245h7.555v7.563c0 1.229 0.988 2.218 2.216 2.218s2.216-0.989 2.216-2.218v-7.563z'></path>
    </svg>
  );
};
