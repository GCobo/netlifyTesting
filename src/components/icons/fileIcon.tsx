import React from 'react';

type IProps = {
  className?: string;
};

const FileIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg
      width='66px'
      height='66px'
      viewBox='0 0 66 66'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <defs>
        <path d='M0 0L66 0L66 66L0 66L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='file--file_blank'>
        <g id='file--file_blank'>
          <path
            d='M0 0L66 0L66 66L0 66L0 0Z'
            id='file--file_blank-(BackgroundMask)'
            fill='none'
            fillRule='evenodd'
            stroke='none'
          />
          <g clipPath='url(#mask_1)'>
            <path
              d='M43.736 18.1115C43.6012 17.82 43.4335 17.5422 43.197 17.3057L26.697 0.80575C26.4605 0.56925 26.1828 0.4015 25.8913 0.26675C25.8088 0.22825 25.7207 0.20625 25.6327 0.176C25.4018 0.0989997 25.1653 0.0495 24.9205 0.03575C24.86 0.03025 24.8078 0 24.75 0L5.5 0C2.46675 0 0 2.46675 0 5.5L0 49.5C0 52.5332 2.46675 55 5.5 55L38.5 55C41.5332 55 44 52.5332 44 49.5L44 19.25C44 19.1922 43.9697 19.14 43.9642 19.0795C43.9505 18.8375 43.9038 18.601 43.8268 18.37C43.7965 18.282 43.7717 18.1968 43.736 18.1115ZM27.5 16.5L27.5 9.3885L34.6115 16.5L27.5 16.5ZM5.5 5.5L22 5.5L22 19.25C22 20.7708 23.2292 22 24.75 22L38.5 22L38.5055 49.5L5.5 49.5L5.5 5.5Z'
              transform='translate(11 5.5)'
              id='file--file_blank'
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

export default FileIcon;
