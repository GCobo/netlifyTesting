import React from 'react'

type IProps = {
  className?: string
}

const ApplicationIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M12 24l-9.583-7.453 1.725-1.342 7.847 6.101 7.858-6.111 1.736 1.351-9.583 7.453zM12 19.453l-9.583-7.453 1.725-1.342 7.847 6.101 7.858-6.112 1.736 1.352-9.583 7.453zM12 14.907l-9.583-7.453 9.583-7.453 9.583 7.453-1.746 1.352-7.837 6.101z'></path>
    </svg>
  )
}

export default ApplicationIcon
