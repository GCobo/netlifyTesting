import React from 'react';
import { IconProps } from '../model';

export const HelpIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12 0-3.183-1.264-6.235-3.515-8.485s-5.303-3.515-8.485-3.515h0zM12 18.008c-0.663 0-1.2-0.537-1.2-1.2s0.537-1.2 1.2-1.2c0.663-0 1.2 0.537 1.2 1.2s-0.537 1.2-1.2 1.2v0zM13.2 12.979v0.221c0 0.429-0.229 0.825-0.6 1.039s-0.829 0.214-1.2 0c-0.371-0.214-0.6-0.611-0.6-1.039v-1.2c-0-0.318 0.126-0.624 0.351-0.849s0.53-0.351 0.849-0.351c0.582-0 1.081-0.419 1.181-0.993s-0.225-1.137-0.773-1.336c-0.548-0.199-1.159 0.024-1.449 0.529-0.215 0.371-0.611 0.599-1.040 0.599s-0.824-0.23-1.038-0.601c-0.214-0.371-0.213-0.829 0.002-1.2 0.793-1.384 2.403-2.080 3.954-1.71s2.674 1.717 2.758 3.309-0.891 3.050-2.395 3.581v0z'></path>
    </svg>
  );
};