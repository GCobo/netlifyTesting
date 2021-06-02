import React from 'react';
import { IconProps } from '../model';

export const ResizeIcon = ({ className }: IconProps) => {
  return (
    <svg width={10} height={10} className={className}>
      <defs>
        <clipPath id='prefix__b'>
          <use xlinkHref='#prefix__a' />
        </clipPath>
        <path d='M0 0h10v10H0V0z' id='prefix__a' />
      </defs>
      <path d='M0 0h10v10H0V0z' fill='none' />
      <g clipPath='url(#prefix__b)'>
        <path
          d='M6.25 3.75h2.083v.833H5.417l.003-2.916h.83V3.75zm-2.5 2.5H1.667v-.833h2.916L4.58 8.333h-.83V6.25z'
          fill='#6E768E'
          fillRule='evenodd'
        />
      </g>
    </svg>
  );
};
