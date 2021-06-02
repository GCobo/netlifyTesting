import React from 'react';
import { IconProps } from '../model';

export const MessageIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M20.4 2.4h-16.8c-1.988 0-3.6 1.612-3.6 3.6v0 12c0 1.988 1.612 3.6 3.6 3.6v0h16.8c1.988 0 3.6-1.612 3.6-3.6v0-12c0-1.988-1.612-3.6-3.6-3.6v0zM20.4 4.8l-7.8 5.364c-0.172 0.101-0.379 0.161-0.6 0.161s-0.428-0.060-0.606-0.164l0.006 0.003-7.8-5.364z'></path>
    </svg>
  );
};
