import React from 'react'

type IProps = {
  className?: string
}

const AlertIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='transparent'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <circle cx='12' cy='12' r='10'></circle>
      <line x1='12' y1='8' x2='12' y2='12'></line>
      <line x1='12' y1='16' x2='12.01' y2='16'></line>
    </svg>
  )
}

export default AlertIcon
