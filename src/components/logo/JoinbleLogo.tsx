import React from 'react';
import { JoinbleTheme } from '../../styles';

type Props = {
  className?: string;
  secondary?: boolean;
  width?: number;
  height?: number;
};

export const JoinbleLogo = ({
  className,
  width = 126,
  height = 40,
  secondary = false
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 328 96'
      className={className}
    >
      <defs>
        <linearGradient
          x1='0.08913493'
          y1='0.47727275'
          x2='0.83589244'
          y2='0.47727275'
          id='gradient_1'
        >
          <stop offset='0' stopColor={JoinbleTheme.colors.primary.primary} />
          <stop offset='1' stopColor='#93EDC7' />
        </linearGradient>
        <linearGradient x1='0' y1='0.5' x2='1' y2='0.5' id='gradient_2'>
          <stop offset='0' stopColor={JoinbleTheme.colors.primary.primary} />
          <stop offset='1' stopColor='#93EDC7' />
        </linearGradient>
        <path d='M0 0L327.111 0L327.111 96L0 96L0 0Z' id='path_1' />
        <clipPath id='mask_1'>
          <use xlinkHref='#path_1' />
        </clipPath>
      </defs>
      <g id='Logo'>
        <path
          d='M0 0L327.111 0L327.111 96L0 96L0 0Z'
          id='Background'
          fill='none'
          fillRule='evenodd'
          stroke='none'
        />
        <g clip-path='url(#mask_1)'>
          <path
            d='M32.384 6.976L32.384 37.056C32.384 42.176 31.04 46.08 28.352 48.768C25.664 51.4133 21.888 52.736 17.024 52.736C11.776 52.736 7.616 51.2853 4.544 48.384C1.51467 45.4827 0 41.2587 0 35.712L12.416 35.712C12.416 39.5093 13.76 41.408 16.448 41.408C18.7093 41.408 19.84 39.9573 19.84 37.056L19.84 6.976L32.384 6.976L32.384 6.976ZM56.0843 15.936C59.6683 15.936 62.8683 16.6827 65.6842 18.176C68.5429 19.6267 70.7829 21.76 72.4043 24.576C74.0256 27.3494 74.8363 30.592 74.8363 34.304C74.8363 38.0587 74.0256 41.3227 72.4043 44.096C70.7829 46.8694 68.5429 49.0027 65.6842 50.496C62.8683 51.9894 59.6683 52.736 56.0843 52.736C52.5003 52.736 49.2789 51.9894 46.4203 50.496C43.5616 49.0027 41.3216 46.8694 39.7003 44.096C38.0789 41.3227 37.2682 38.0587 37.2682 34.304C37.2682 30.5494 38.0789 27.2854 39.7003 24.512C41.3216 21.7387 43.5616 19.6267 46.4203 18.176C49.2789 16.6827 52.5003 15.936 56.0843 15.936L56.0843 15.936ZM56.0841 26.816C54.3348 26.816 52.8841 27.456 51.7321 28.736C50.5801 30.016 50.0041 31.872 50.0041 34.304C50.0041 36.7787 50.5801 38.656 51.7321 39.936C52.8841 41.216 54.3348 41.856 56.0841 41.856C57.7908 41.856 59.2201 41.216 60.3721 39.936C61.5241 38.6134 62.1001 36.736 62.1001 34.304C62.1001 31.872 61.5241 30.016 60.3721 28.736C59.2201 27.456 57.7908 26.816 56.0841 26.816L56.0841 26.816ZM78.8501 6.464C78.8501 4.58667 79.5328 3.05067 80.8981 1.856C82.2634 0.618666 84.0554 0 86.2741 0C88.4928 0 90.2634 0.618666 91.5861 1.856C92.9088 3.05067 93.5699 4.58667 93.5699 6.464C93.5699 8.256 92.8874 9.74933 91.5221 10.944C90.1994 12.1387 88.4501 12.736 86.2741 12.736C84.0554 12.736 82.2634 12.1387 80.8981 10.944C79.5328 9.74933 78.8501 8.256 78.8501 6.464L78.8501 6.464ZM92.4819 16.384L92.4819 52.288L79.8739 52.288L79.8739 16.384L92.4819 16.384L92.4819 16.384ZM123.436 16.064C127.575 16.064 130.818 17.4507 133.164 20.224C135.511 22.9547 136.684 26.688 136.684 31.424L136.684 52.288L124.204 52.288L124.204 33.024C124.204 30.9333 123.65 29.312 122.54 28.16C121.474 26.9653 120.023 26.368 118.188 26.368C116.311 26.368 114.818 26.9867 113.708 28.224C112.599 29.4187 112.044 31.0827 112.044 33.216L112.044 52.288L99.4364 52.288L99.4364 16.384L112.044 16.384L112.044 22.4C113.068 20.48 114.562 18.944 116.524 17.792C118.487 16.64 120.791 16.064 123.436 16.064L123.436 16.064ZM166.606 15.936C169.465 15.936 172.046 16.6827 174.35 18.176C176.654 19.6267 178.468 21.7387 179.79 24.512C181.113 27.2853 181.774 30.5493 181.774 34.304C181.774 38.0587 181.113 41.344 179.79 44.16C178.468 46.9333 176.654 49.0667 174.35 50.56C172.046 52.0107 169.465 52.736 166.606 52.736C164.089 52.736 161.913 52.2027 160.078 51.136C158.244 50.0267 156.878 48.512 155.982 46.592L155.982 52.288L143.374 52.288L143.374 4.92801L155.982 4.92801L155.982 22.08C156.878 20.16 158.244 18.6667 160.078 17.6C161.913 16.4907 164.089 15.936 166.606 15.936L166.606 15.936ZM162.446 26.944C160.569 26.944 159.011 27.6053 157.774 28.928C156.537 30.2507 155.918 32.0427 155.918 34.304C155.918 36.608 156.537 38.4214 157.774 39.744C159.011 41.0667 160.569 41.728 162.446 41.728C164.409 41.728 165.987 41.088 167.182 39.808C168.419 38.4854 169.038 36.6507 169.038 34.304C169.038 32 168.419 30.208 167.182 28.928C165.987 27.6053 164.409 26.944 162.446 26.944L162.446 26.944ZM199.419 4.92801L199.419 52.288L186.811 52.288L186.811 4.92801L199.419 4.92801L199.419 4.92801ZM240.87 33.664C240.87 34.56 240.763 35.5414 240.549 36.608L216.806 36.608C217.019 40.6614 218.79 42.688 222.118 42.688C223.355 42.688 224.379 42.3894 225.189 41.792C226 41.1947 226.555 40.4054 226.854 39.424L240.166 39.424C239.696 41.9414 238.651 44.224 237.03 46.272C235.408 48.2774 233.36 49.856 230.886 51.008C228.411 52.16 225.702 52.736 222.758 52.736C219.174 52.736 215.995 52.0107 213.222 50.56C210.491 49.0667 208.358 46.9334 206.822 44.16C205.286 41.344 204.518 38.0587 204.518 34.304C204.518 30.5494 205.286 27.2854 206.822 24.512C208.358 21.7387 210.512 19.6267 213.286 18.176C216.059 16.6827 219.216 15.936 222.758 15.936C226.342 15.936 229.499 16.6614 232.23 18.112C234.96 19.5627 237.072 21.632 238.566 24.32C240.102 27.008 240.87 30.1227 240.87 33.664L240.87 33.664ZM228.069 31.36C228.112 29.5254 227.621 28.1387 226.597 27.2C225.573 26.2614 224.293 25.792 222.757 25.792C221.093 25.792 219.728 26.2614 218.661 27.2C217.637 28.1387 217.04 29.5254 216.869 31.36L228.069 31.36L228.069 31.36Z'
            transform='translate(84.387634 18.823105)'
            id='Shape'
            fill={
              secondary ? JoinbleTheme.colors.primary.greyDarkest : '#F1FFFE'
            }
            fillRule='evenodd'
            stroke='none'
          />
          <path
            d='M0 34.2139C3.616 30.3916 5.83342 25.2325 5.83342 19.5556C5.83342 13.8786 3.616 8.71947 0 4.89724C3.44836 1.8496 7.98045 0 12.9445 0C23.7447 0 32.5001 8.75538 32.5001 19.5556C32.5001 30.3557 23.7447 39.1111 12.9445 39.1111C7.98045 39.1111 3.44836 37.2615 0 34.2139L0 34.2139Z'
            transform='translate(36.833313 32)'
            id='Shape'
            fill='url(#gradient_1)'
            fillRule='evenodd'
            stroke='none'
          />
          <path
            d='M0 19.5556C0 8.75532 8.75532 0 19.5556 0C30.3558 0 39.1111 8.75532 39.1111 19.5556C39.1111 30.3558 30.3558 39.1111 19.5556 39.1111C8.75532 39.1111 0 30.3558 0 19.5556Z'
            transform='translate(0 32)'
            id='Ellipse'
            fill='url(#gradient_2)'
            fillRule='evenodd'
            stroke='none'
          />
        </g>
      </g>
    </svg>
  );
};
