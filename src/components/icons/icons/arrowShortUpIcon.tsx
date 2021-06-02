import React from 'react';
import { IconProps } from '../model';

export const ArrowShortUpIcon = ({ className }: IconProps) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24'>
      <path d="M13 7.83L16.59 11.41L18 10L12 4L6 10L7.41 11.41L11 7.83V20H13V7.83Z" />
    </svg>
  );
};
