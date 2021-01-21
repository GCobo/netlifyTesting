import React from 'react';
import { IconProps } from './model';

export const PublishIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M0.001 21.331c0 1.47 1.196 2.666 2.666 2.666h5.333v-2.666h-5.333v-18.665h18.665v18.665h-5.333v2.666h5.333c1.47 0 2.666-1.196 2.666-2.666v-18.665c0-1.47-1.196-2.666-2.666-2.666h-18.665c-1.47 0-2.666 1.197-2.666 2.666v18.665zM12 6.669l-5.333 6.666h4.001v10.665h2.666v-10.665h3.998l-5.333-6.666z'></path>
    </svg>
  );
};
