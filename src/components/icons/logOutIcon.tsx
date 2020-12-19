import React from 'react';

type IProps = {
  className?: string;
};

const LogOutIcon = ({ className }: IProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M21.333 24h-12c-1.473 0-2.667-1.194-2.667-2.667v-5.333h2.667v5.333h12v-18.667h-12v5.333h-2.667v-5.333c0-1.473 1.194-2.667 2.667-2.667h12c1.473 0 2.667 1.194 2.667 2.667v18.667c0 1.473-1.194 2.667-2.667 2.667zM12 17.333v-4h-12v-2.667h12v-4l6.667 5.333-6.667 5.333z'></path>
    </svg>
  );
};

export default LogOutIcon;
