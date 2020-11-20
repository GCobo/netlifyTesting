import React from 'react'

type IProps = {
  className?: string
}

const HamburguerIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M24 20h-24v-2.667h24v2.667zM24 13.333h-24v-2.667h24v2.667zM24 6.667h-24v-2.667h24v2.667z'></path>
    </svg>
  )
}

export default HamburguerIcon
