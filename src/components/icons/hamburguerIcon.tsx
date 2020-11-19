import React from 'react'

type IProps = {
  className?: string
}

const HamburguerIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path
        d='M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z'
        fillRule='evenodd'
      ></path>
    </svg>
  )
}

export default HamburguerIcon
