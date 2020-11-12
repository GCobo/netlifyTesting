import React from 'react'

type IProps = {
  className?: string
}

const ChevronDownIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='6 9 12 15 18 9'></polyline>
    </svg>
  )
}

export default ChevronDownIcon
