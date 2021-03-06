import React from 'react';
import { IconProps } from '../model';

export const CloseIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M24 2.518c-0.021-0.668-0.302-1.301-0.784-1.764-1.008-0.964-2.597-0.964-3.605 0l-7.475 7.475-7.483-7.475c-1.007-0.959-2.59-0.959-3.597 0-0.991 0.997-0.991 2.608 0 3.605l7.475 7.475-7.475 7.509c-0.818 0.593-1.209 1.612-1 2.601s0.982 1.76 1.97 1.97 2.007-0.182 2.601-0.999l7.509-7.467 7.483 7.467c1.017 0.826 2.493 0.749 3.42-0.177s1.003-2.403 0.177-3.42v0l-7.466-7.483 7.466-7.509c0.492-0.473 0.775-1.124 0.784-1.807v0z'></path>
    </svg>
  );
};
