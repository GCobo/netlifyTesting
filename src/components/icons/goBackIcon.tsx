import React from 'react';
import { IconProps } from './model';

export const GoBackIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M12 24c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12-0.007 6.624-5.376 11.993-12 12zM12 2.4c-5.274 0.001-9.559 4.256-9.597 9.53s4.184 9.591 9.457 9.669c5.273 0.079 9.622-4.111 9.741-9.383v2.14-2.356c-0.006-5.299-4.301-9.594-9.6-9.6zM13.74 17.88l-5.94-5.94 5.94-5.94 1.697 1.697-4.243 4.243 4.242 4.243-1.696 1.697z'></path>
    </svg>
  );
};
