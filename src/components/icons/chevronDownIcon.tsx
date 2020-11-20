import React from 'react'

type IProps = {
  className?: string
}

const ChevronDownIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='16' height='16' viewBox='0 0 24 24' className={className}>
      <path d='M12 19.413l12-12-2.821-2.825-9.179 9.185-9.177-9.185-2.823 2.823 12 12.002z'></path>
    </svg>
  )
}

export default ChevronDownIcon
