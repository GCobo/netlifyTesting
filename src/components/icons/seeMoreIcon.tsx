import React from 'react';
import { IconProps } from './model';

export const SeeMoreIcon = ({ className }: IconProps) => {
  return (
    <svg
      width='24px'
      height='24px'
      className={className}
      viewBox='0 0 24 24'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <path d='M0 0L24 0L24 24L0 24L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='edit--search_small_plus'>
        <g id='edit--search_small_plus'>
          <path
            d='M0 0L24 0L24 24L0 24L0 0Z'
            id='edit--search_small_plus-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M9.23379 7.81003C10.5287 5.85557 10.3151 3.19634 8.59311 1.47434C6.62732 -0.491448 3.44014 -0.491448 1.47434 1.47434C-0.491448 3.44014 -0.491448 6.62732 1.47434 8.59311C3.19634 10.3151 5.85557 10.5287 7.81003 9.23379L13.5762 15L15 13.5762L9.23379 7.81003C10.5287 5.85557 9.23379 7.81003 9.23379 7.81003ZM7.16936 2.8981C8.34883 4.07757 8.34883 5.98988 7.16936 7.16936C5.98988 8.34883 4.07757 8.34883 2.8981 7.16936C1.71862 5.98988 1.71862 4.07757 2.8981 2.8981C4.07757 1.71862 5.98988 1.71862 7.16936 2.8981C8.34883 4.07757 7.16936 2.8981 7.16936 2.8981ZM14 0L16 0L16 2L18 2L18 4L16 4L16 6L14 6L14 4L12 4L12 2L14 2L14 0Z'
              transform='translate(3 5)'
              id='edit--search_small_plus'
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
