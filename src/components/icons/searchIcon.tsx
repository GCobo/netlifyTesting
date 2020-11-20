import React from 'react'

type IProps = {
  className?: string
}

const SearchIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M21.954 24l-8.259-8.26c-3.674 2.612-8.737 1.973-11.646-1.47s-2.696-8.541 0.492-11.728c3.187-3.189 8.286-3.403 11.729-0.494s4.083 7.973 1.471 11.647l8.259 8.26-2.045 2.045zM8.671 2.891c-2.74-0.001-5.105 1.923-5.661 4.606s0.847 5.389 3.362 6.478c2.514 1.089 5.448 0.264 7.026-1.977s1.364-5.282-0.51-7.281l0.874 0.867-1.003-1c-1.081-1.088-2.553-1.698-4.087-1.694z'></path>
    </svg>
  )
}

export default SearchIcon
