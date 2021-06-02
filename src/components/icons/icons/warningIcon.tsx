import React from 'react';
import { IconProps } from '../model';

export const WarningIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M22.833 22.52h-21.665c-0.418 0-0.804-0.223-1.012-0.584s-0.209-0.807 0-1.169l10.832-18.703c0.209-0.361 0.595-0.583 1.012-0.583s0.803 0.222 1.012 0.583l10.832 18.703c0.209 0.361 0.209 0.807 0 1.168s-0.594 0.585-1.011 0.585h0.001zM10.833 16.675v2.338h2.336v-2.338h-2.336zM10.833 8.493v5.845h2.338v-5.845h-2.338z'></path>
    </svg>
  );
};
