import React from 'react'

type IProps = {
  className?: string
}

const closeIcon = ({ className }: IProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M21.583 0l-9.583 9.583-9.583-9.583-2.417 2.417 9.583 9.583-9.583 9.583 2.417 2.417 9.583-9.583 9.583 9.583 2.417-2.417-9.583-9.583 9.583-9.583-2.417-2.417z'></path>
    </svg>
  )
}

export default closeIcon
