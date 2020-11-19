import React from 'react'

type IProps = {
  className?: string
}

const CheckboxCheckedIcon: React.FunctionComponent<IProps> = ({
  className
}) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path
        fillRule='evenodd'
        d='M17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19ZM7 7V17H17V7H7ZM15 15H9V9H15V15Z'
      ></path>
    </svg>
  )
}

export default CheckboxCheckedIcon
