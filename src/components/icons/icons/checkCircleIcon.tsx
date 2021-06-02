import React from 'react';
import { IconProps } from '../model';

export const CheckCircleIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d="M12 0c-6.613 0-12 5.387-12 12s5.387 12 12 12c6.613 0 12-5.387 12-12s-5.387-12-12-12v0zM17.519 7.439c0.531 0.397 0.639 1.15 0.241 1.68l-5.395 7.2c-0.438 0.583-1.291 0.644-1.807 0.129l-4.207-4.193c-0.469-0.468-0.47-1.228-0.002-1.697 0.468-0.471 1.23-0.472 1.699-0.002l3.225 3.216 4.566-6.091c0.413-0.536 1.166-0.631 1.68-0.241v0z"></path>
    </svg>
  );
};
