import React from 'react';
import { IconProps } from './model';

const ThemeIcon = ({ className }: IconProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 14 14' className={className}>
      <path d='M11.9 0L2.1 0C0.91 0 0 0.91 0 2.1L0 11.9C0 13.09 0.91 14 2.1 14L11.9 14C13.09 14 14 13.09 14 11.9L14 2.1C14 0.91 13.09 0 11.9 0ZM1.40002 2.09999C1.40002 1.67999 1.68002 1.39999 2.10002 1.39999L11.9 1.39999C12.32 1.39999 12.6 1.67999 12.6 2.09999L12.6 7.41999L10.29 5.10999C10.01 4.82999 9.59002 4.82999 9.31002 5.10999L1.89002 12.53C1.61002 12.46 1.40002 12.18 1.40002 11.9L1.40002 2.09999ZM11.9 12.6L3.78003 12.6L9.80003 6.57999L12.6 9.37999L12.6 11.9C12.6 12.32 12.32 12.6 11.9 12.6ZM4.54999 6.29999C5.52999 6.29999 6.29999 5.52999 6.29999 4.54999C6.29999 3.56999 5.52999 2.79999 4.54999 2.79999C3.56999 2.79999 2.79999 3.56999 2.79999 4.54999C2.79999 5.52999 3.56999 6.29999 4.54999 6.29999ZM4.55001 4.20001C4.76001 4.20001 4.90001 4.34001 4.90001 4.55001C4.90001 4.76001 4.76001 4.90001 4.55001 4.90001C4.34001 4.90001 4.20001 4.76001 4.20001 4.55001C4.20001 4.34001 4.34001 4.20001 4.55001 4.20001Z' />
    </svg>
  );
};

export default ThemeIcon;
