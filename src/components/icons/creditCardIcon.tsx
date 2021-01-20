import React from 'react';
import { IconProps } from './model';

export const CreditCardIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M21.6 21.6h-19.2c-1.325 0-2.4-1.074-2.4-2.4v-14.4c0-1.325 1.075-2.4 2.4-2.4h19.2c1.326 0 2.4 1.075 2.4 2.4v14.4c0 1.326-1.074 2.4-2.4 2.4zM2.4 12v7.2h19.2v-7.2h-19.2zM2.4 4.8v2.4h19.2v-2.4h-19.2zM13.2 16.8h-8.4v-2.4h8.4v2.4z'></path>
    </svg>
  );
};
