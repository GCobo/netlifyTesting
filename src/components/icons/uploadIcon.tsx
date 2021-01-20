import React from 'react';
import { IconProps } from './model';

export const UploadIcon = ({ className }: IconProps) => {
  return (
    <svg width='40px' height='40px' viewBox='0 0 40 40' className={className}>
      <defs>
        <path d='M0 0L40 0L40 40L0 40L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='file---cloud_up'>
        <g id='file---cloud_up'>
          <path
            d='M0 0L40 0L40 40L0 40L0 0Z'
            id='file---cloud_up-(Background-Mask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M13.3333 15L20 8.33333L26.6667 15L22.4167 15L22.4167 20L17.5833 20L17.5833 15L13.3333 15ZM20 0C26.2474 0 31.4913 4.29675 32.9377 10.0963C36.9368 10.7083 40 14.1631 40 18.3333C40 22.9357 36.269 26.6667 31.6667 26.6667L10 26.6667C4.47715 26.6667 0 22.1895 0 16.6667C0 11.697 3.62524 7.57399 8.37547 6.79795C10.6616 2.74032 15.0108 0 20 0C26.2474 0 20 0 20 0ZM8.91291 10.0877L10.4935 9.82947L11.2796 8.43418C12.9991 5.3823 16.2624 3.33333 20 3.33333C24.6811 3.33333 28.6185 6.55286 29.7034 10.9029L30.2403 13.0557L32.4334 13.3913C34.83 13.758 36.6667 15.8342 36.6667 18.3333C36.6667 21.0948 34.4281 23.3333 31.6667 23.3333L10 23.3333C6.3181 23.3333 3.33333 20.3486 3.33333 16.6667C3.33333 13.3568 5.74873 10.6046 8.91291 10.0877L8.91291 10.0877Z'
              transform='translate(0 6.6666665)'
              id='file---cloud_up'
              fill='#6E768E'
              fillRule='evenodd'
              stroke='none'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
