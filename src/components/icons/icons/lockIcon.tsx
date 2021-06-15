import React from 'react';
import { IconProps } from '../model';

export const LockIcon = ({ className }: IconProps) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24'>
      <path d='M7.471 8.053h9.606c2.829 0 5.123 2.244 5.123 5.011v5.925c0 2.767-2.294 5.011-5.123 5.011h-10.156c-2.828 0-5.121-2.244-5.121-5.011v-5.925c0-2.276 1.561-4.176 3.685-4.786l-0.133 0.015v-1.828c0.024-3.565 2.989-6.465 6.622-6.465 2.841 0 5.352 1.755 6.279 4.353 0.098 0.262 0.073 0.549-0.049 0.799s-0.34 0.441-0.61 0.526c-0.549 0.19-1.158-0.095-1.366-0.644-0.622-1.766-2.328-2.947-4.23-2.947-2.489 0-4.499 1.957-4.513 4.353v1.61l-0.015 0.002zM11.994 18.394c0.597 0 1.073-0.465 1.073-1.050v-2.648c0-0.573-0.476-1.038-1.073-1.038-0.585 0-1.061 0.465-1.061 1.038v2.648c0 0.585 0.476 1.050 1.061 1.050z'></path>
    </svg>
  );
};