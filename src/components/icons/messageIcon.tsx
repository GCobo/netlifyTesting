import React from 'react';
import { IconProps } from './model';

export const MessageIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M21.6 21.6h-19.2c-1.325 0-2.4-1.074-2.4-2.4v-14.504c0.056-1.285 1.114-2.297 2.4-2.296h19.2c1.326 0 2.4 1.075 2.4 2.4v14.4c0 1.326-1.074 2.4-2.4 2.4zM2.4 7.042v12.158h19.2v-12.158l-9.6 6.398-9.6-6.398zM3.36 4.8l8.64 5.76 8.64-5.76h-17.28z'></path>
    </svg>
  );
};
