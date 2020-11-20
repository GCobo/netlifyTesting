import React from 'react'

type IProps = {
  className?: string
}

const ShowIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path d='M12 20.4c-1.968 0.024-3.916-0.4-5.695-1.242-1.379-0.673-2.618-1.602-3.649-2.738-1.093-1.175-1.953-2.546-2.536-4.040l-0.12-0.379 0.126-0.379c0.583-1.494 1.441-2.864 2.531-4.040 1.031-1.136 2.269-2.065 3.648-2.738 1.779-0.842 3.727-1.266 5.695-1.242 1.968-0.024 3.916 0.4 5.695 1.242 1.379 0.673 2.618 1.602 3.649 2.738 1.095 1.173 1.955 2.544 2.536 4.040l0.12 0.379-0.126 0.379c-1.883 4.901-6.625 8.104-11.874 8.021zM12 6c-4.085-0.128-7.834 2.25-9.46 6 1.625 3.75 5.375 6.128 9.46 6 4.085 0.128 7.834-2.25 9.46-6-1.623-3.752-5.374-6.131-9.46-6zM12 15.6c-1.731 0.011-3.229-1.203-3.575-2.899s0.556-3.401 2.153-4.068c1.597-0.668 3.444-0.112 4.408 1.326s0.776 3.357-0.448 4.581c-0.67 0.678-1.584 1.060-2.538 1.061z'></path>
    </svg>
  )
}

export default ShowIcon
