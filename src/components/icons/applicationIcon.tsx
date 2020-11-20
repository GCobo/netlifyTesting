import React from 'react'

type IProps = {
  className?: string
}

const ApplicationIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M24 24h-10.286v-10.286h10.286v10.286zM10.286 24h-10.286v-10.286h10.286v10.286zM24 10.286h-10.286v-10.286h10.286v10.286zM10.286 10.286h-10.286v-10.286h10.286v10.286z'></path>
    </svg>
  )
}

export default ApplicationIcon