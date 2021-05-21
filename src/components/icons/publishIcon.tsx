import React from 'react';
import { IconProps } from './model';

export const PublishIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M1.5 1.5c0 0.825 0.675 1.5 1.5 1.5h18c0.825 0 1.5-0.675 1.5-1.5s-0.675-1.5-1.5-1.5h-18c-0.825 0-1.5 0.675-1.5 1.5zM5.115 15h2.385v7.5c0 0.825 0.675 1.5 1.5 1.5h6c0.825 0 1.5-0.675 1.5-1.5v-7.5h2.385c1.335 0 2.010-1.62 1.065-2.565l-6.885-6.885c-0.585-0.585-1.53-0.585-2.115 0l-6.885 6.885c-0.945 0.945-0.285 2.565 1.050 2.565z'></path>
    </svg>
  );
};
