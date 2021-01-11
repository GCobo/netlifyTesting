import React from 'react'

type IProps = {
  className?: string
}

const editIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M1.322 23.997c-0.369-0.001-0.722-0.156-0.971-0.429-0.254-0.271-0.38-0.637-0.346-1.006l0.323-3.548 14.905-14.9 4.658 4.657-14.901 14.898-3.548 0.323c-0.041 0.004-0.082 0.005-0.12 0.005zM20.821 7.839l-4.657-4.657 2.793-2.793c0.247-0.247 0.582-0.386 0.932-0.386s0.685 0.139 0.932 0.386l2.793 2.793c0.247 0.247 0.386 0.582 0.386 0.932s-0.139 0.685-0.386 0.932l-2.793 2.793z'></path>
    </svg>
  )
}

export default editIcon