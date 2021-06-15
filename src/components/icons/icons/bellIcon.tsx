import React from 'react';
import { IconProps } from '../model';

export const BellIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M20.049 8.156c0 1.507 0.398 2.395 1.275 3.419 0.664 0.754 0.877 1.722 0.877 2.772 0 1.049-0.345 2.045-1.035 2.854-0.904 0.969-2.179 1.588-3.48 1.696-1.886 0.161-3.772 0.296-5.684 0.296-1.913 0-3.799-0.081-5.684-0.296-1.302-0.108-2.577-0.726-3.48-1.696-0.691-0.809-1.036-1.804-1.036-2.854 0-1.050 0.213-2.018 0.877-2.772 0.904-1.024 1.276-1.912 1.276-3.419v-0.511c0-2.018 0.503-3.338 1.54-4.63 1.541-1.884 4.011-3.014 6.455-3.014h0.107c2.496 0 5.046 1.184 6.561 3.15 0.983 1.265 1.434 2.53 1.434 4.495v0.511zM8.488 21.673c0-0.604 0.555-0.881 1.067-0.999 0.6-0.127 4.255-0.127 4.855 0 0.513 0.118 1.067 0.395 1.067 0.999-0.030 0.575-0.367 1.085-0.834 1.409-0.605 0.471-1.314 0.77-2.056 0.877-0.41 0.053-0.813 0.054-1.209 0-0.743-0.108-1.453-0.406-2.056-0.879-0.467-0.323-0.805-0.833-0.835-1.408z'></path>
    </svg>
  );
};