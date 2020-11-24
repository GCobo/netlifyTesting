import React from 'react'

type IProps = {
  className?: string
}

const TrashIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M18 24h-12c-1.325 0-2.4-1.074-2.4-2.4v-15.6h-2.4v-2.4h4.8v-1.2c0-1.325 1.075-2.4 2.4-2.4h7.2c1.326 0 2.4 1.075 2.4 2.4v1.2h4.8v2.4h-2.4v15.6c0 1.326-1.074 2.4-2.4 2.4zM6 6v15.6h12v-15.6h-12zM8.4 2.4v1.2h7.2v-1.2h-7.2zM15.6 19.2h-2.4v-10.8h2.4v10.8zM10.8 19.2h-2.4v-10.8h2.4v10.8z'></path>
    </svg>
  )
}

export default TrashIcon
