import React from 'react';
import { IconProps } from './model';

export const NotificationIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M12 24c-1.326 0-2.4-1.074-2.4-2.4h4.8c0 1.326-1.074 2.4-2.4 2.4zM21.6 20.4h-19.2v-2.4l2.4-1.2v-6.6c0-4.154 1.705-6.848 4.8-7.584v-2.616h4.8v2.616c3.095 0.734 4.8 3.427 4.8 7.584v6.6l2.4 1.2v2.4zM12 4.5c-1.464-0.095-2.877 0.561-3.75 1.74-0.747 1.181-1.113 2.564-1.050 3.96v7.8h9.6v-7.8c0.063-1.396-0.303-2.778-1.050-3.96-0.873-1.179-2.286-1.835-3.75-1.74z'></path>
    </svg>
  );
};
