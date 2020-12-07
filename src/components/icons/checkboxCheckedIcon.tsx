import React from 'react'

type IProps = {
  className?: string
}

const CheckboxCheckedIcon: React.FunctionComponent<IProps> = ({
  className
}) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M24 4.797l-16.32 16.32-7.68-7.68 1.914-1.914 5.766 5.752 14.406-14.392 1.914 1.914z'></path>
    </svg>
  )
}

export default CheckboxCheckedIcon
