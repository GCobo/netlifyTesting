import React from 'react';
import { IconProps } from './model';

export const BagIcon = ({ className }: IconProps) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24'>
      <path d='M8.907 0.855c1.92-1.14 4.319-1.14 6.239 0s3.048 3.24 2.964 5.459v0 0.276c1.512 0 3.108 1.056 3.66 3.624v0l0.924 7.187c0.685 4.691-2.040 6.599-5.699 6.599v0h-9.947c-3.67 0-6.479-1.32-5.723-6.599v0l0.936-7.187c0.144-1.068 0.66-2.064 1.464-2.796 0.613-0.539 1.404-0.828 2.22-0.828v0-0.276c-0.096-2.22 1.045-4.319 2.964-5.459zM15.47 10.454c-0.587 0-1.068 0.468-1.068 1.056 0 0.576 0.481 1.056 1.068 1.056 0.276 0 0.552-0.108 0.744-0.312 0.204-0.192 0.312-0.468 0.312-0.744 0-0.588-0.48-1.056-1.056-1.056zM8.511 10.454c-0.588 0-1.068 0.468-1.068 1.056 0 0.576 0.48 1.056 1.068 1.056s1.056-0.48 1.056-1.056c0-0.588-0.468-1.056-1.056-1.056zM12.003 2.091c-2.34 0-4.235 1.896-4.235 4.223v0 0.265h8.483v-0.265c0-2.328-1.896-4.223-4.247-4.223z'></path>
    </svg>
  );
};