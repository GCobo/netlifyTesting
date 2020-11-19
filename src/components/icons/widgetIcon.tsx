import React from 'react'

type IProps = {
  className?: string
}

const ApplicationIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path
        d='M12 23.27L3 16.27L4.62 15.01L11.99 20.74L19.37 15.001L21 16.27L12 23.27ZM12 19L3 12L4.62 10.74L11.99 16.47L19.37 10.73L21 12L12 19ZM12 14.73L4.63 9.00001L3 7.73001L12 0.730011L21 7.73001L19.36 9.00001L12 14.73Z'
        fillRule='evenodd'
      ></path>
    </svg>
  )
}

export default ApplicationIcon
