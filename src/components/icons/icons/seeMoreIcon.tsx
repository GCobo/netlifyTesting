import React from 'react';
import { IconProps } from '../model';

export const SeeMoreIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M0 10.404c0-5.746 4.608-10.404 10.293-10.404 2.73 0 5.348 1.096 7.278 3.047s3.015 4.597 3.015 7.357c0 5.746-4.608 10.404-10.293 10.404s-10.293-4.658-10.293-10.404zM20.416 18.785l3.065 2.474h0.053c0.62 0.627 0.62 1.643 0 2.27s-1.626 0.627-2.246 0l-2.544-2.916c-0.24-0.242-0.376-0.571-0.376-0.915s0.135-0.672 0.376-0.915c0.464-0.461 1.207-0.461 1.671 0zM10.898 11.654h3.639c0.59-0.013 1.064-0.488 1.064-1.078s-0.474-1.065-1.064-1.065h-3.639v-3.618c0-0.59-0.474-1.065-1.064-1.065s-1.064 0.475-1.064 1.065v3.618h-3.626c-0.282 0-0.551 0.115-0.756 0.308-0.192 0.205-0.308 0.473-0.308 0.757 0 0.59 0.474 1.065 1.064 1.078h3.626v3.63c0 0.59 0.474 1.065 1.064 1.065s1.064-0.475 1.064-1.065v-3.63z'></path>
    </svg>
  );
};