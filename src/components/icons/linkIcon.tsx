import React from 'react';
import { IconProps } from './model';

export const LinkIcon = ({ className }: IconProps) => {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' className={className}>
      <path d='M8.114 11.126c1.275-1.275 3.484-1.275 4.758 0 0.568 0.568 1.502 0.568 2.070 0s0.568-1.502 0-2.070c-1.186-1.186-2.764-1.843-4.443-1.843s-3.269 0.656-4.455 1.843l-4.19 4.203c-2.449 2.449-2.449 6.437 0 8.898 1.186 1.186 2.764 1.843 4.443 1.843s3.256-0.669 4.443-1.855l1.792-1.792c0.568-0.568 0.568-1.502 0-2.070s-1.502-0.568-2.070 0l-1.792 1.792c-1.275 1.275-3.484 1.275-4.758 0-1.313-1.313-1.313-3.446 0-4.758l4.203-4.19z'></path>
      <path d='M17.956 14.925l4.19-4.19c2.449-2.449 2.449-6.437 0-8.898-2.449-2.449-6.437-2.449-8.898 0l-1.78 1.792c-0.568 0.568-0.568 1.502 0 2.070s1.502 0.568 2.070 0l1.792-1.792c1.313-1.313 3.446-1.313 4.758 0s1.313 3.446 0 4.758l-4.19 4.19c-1.275 1.275-3.484 1.275-4.758 0-0.568-0.568-1.502-0.568-2.070 0s-0.568 1.502 0 2.070c1.186 1.186 2.764 1.843 4.443 1.843s3.256-0.656 4.443-1.843v0z'></path>
    </svg>
  );
};
