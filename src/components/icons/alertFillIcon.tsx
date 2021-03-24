import React from 'react';
import { IconProps } from './model';

export const AlertFillIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 94 94' className={className}>
      <mask
        id='mask0'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='94'
        height='94'
      >
        <rect width='94' height='94' fill='white' />
      </mask>
      <g mask='url(#mask0)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M46.9999 7.83334C25.3799 7.83334 7.83325 25.38 7.83325 47C7.83325 68.62 25.3799 86.1667 46.9999 86.1667C68.6199 86.1667 86.1666 68.62 86.1666 47C86.1666 25.38 68.6199 7.83334 46.9999 7.83334C25.3799 7.83334 46.9999 7.83334 46.9999 7.83334ZM43.0833 66.5833V58.75H50.9166V66.5833H43.0833V66.5833ZM43.0833 27.4167V50.9167H50.9166V27.4167H43.0833V27.4167Z'
        />
      </g>
    </svg>
  );
};
