import React from 'react'

type IProps = {
  className?: string
}

const ChevronDownIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path
        d='M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z'
        fillRule='evenodd'
      ></path>
    </svg>
  )
}

export default ChevronDownIcon
