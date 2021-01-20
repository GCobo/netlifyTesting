import React from 'react';
import { IconProps } from './model';

export const MapIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M0.48 20.904v-18.556l7.939 2.646 8.099-4.628 7 2.8v18.609l-6.823-2.729-8.028 4.587-8.188-2.729zM14.304 17.76v-13.474l-4.608 2.633v13.474l4.608-2.633zM16.608 16.529l4.608 1.843v-13.646l-4.519-1.808-0.089 0.051v13.56zM2.784 19.244l4.608 1.536v-13.699l-4.608-1.536v13.699z'></path>
    </svg>
  );
};
