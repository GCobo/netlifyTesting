import React from 'react'

type IProps = {
  className?: string
}

const ApplicationIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path
        d='M19 19H13V13H19V19ZM11 19H5V13H11V19ZM19 11H13V5H19V11ZM11 11H5V5H11V11Z'
        fillRule='evenodd'
      ></path>
    </svg>
  )
}

export default ApplicationIcon
