import React from 'react';
import { IconProps } from './model';

export const ShopingIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M14.546 11.080h3.321c0.504 0 0.899-0.416 0.899-0.918 0-0.514-0.396-0.918-0.899-0.918h-3.321c-0.504 0-0.899 0.404-0.899 0.918 0 0.502 0.396 0.918 0.899 0.918zM21.812 4.713c0.731 0 1.211 0.257 1.691 0.82s0.564 1.372 0.456 2.105l-1.139 8.033c-0.216 1.544-1.511 2.682-3.034 2.682h-13.082c-1.595 0-2.914-1.248-3.046-2.864l-1.103-13.35-1.811-0.318c-0.48-0.086-0.815-0.563-0.731-1.053 0.084-0.501 0.552-0.833 1.043-0.758l2.86 0.44c0.408 0.075 0.707 0.416 0.743 0.833l0.228 2.743c0.036 0.393 0.348 0.687 0.731 0.687h16.193zM6.512 20.289c-1.007 0-1.823 0.833-1.823 1.861 0 1.017 0.815 1.849 1.823 1.849 0.995 0 1.811-0.833 1.811-1.849 0-1.029-0.815-1.861-1.811-1.861zM20.001 20.289c-1.007 0-1.823 0.833-1.823 1.861 0 1.017 0.815 1.849 1.823 1.849 0.995 0 1.811-0.833 1.811-1.849 0-1.029-0.815-1.861-1.811-1.861z'></path>
    </svg>
  );
};
