import React from 'react';
import { IconProps } from './model';

export const PlayIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M5.347 23.476l16.871-8.811c0.832-0.42 1.426-1.154 1.663-1.993s0.119-1.678-0.356-2.412c-0.238-0.42-0.713-0.839-1.188-1.049l-16.99-8.81c-1.663-0.839-3.921-0.315-4.871 1.154-0.356 0.42-0.475 0.944-0.475 1.468v17.831c0 0.839 0.356 1.678 1.069 2.203 0.713 0.629 1.545 0.944 2.495 0.944 0.594-0.105 1.307-0.21 1.782-0.524zM2.733 21.587c-0.238-0.21-0.356-0.524-0.356-0.734v-17.831c0-0.21 0-0.315 0.119-0.524 0.356-0.524 1.069-0.629 1.663-0.42l16.753 8.915c0.119 0.105 0.356 0.21 0.356 0.315 0.356 0.524 0.119 1.154-0.356 1.468l-16.753 8.915c-0.119 0.105-0.356 0.105-0.594 0.105-0.356 0.105-0.594-0.105-0.832-0.21z'></path>
    </svg>
  );
};
