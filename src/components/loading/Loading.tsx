import React, { Fragment } from 'react'
import { Overlay } from '../overlay/Overlay'
import { LoadingStyles, Dot1, Dot2 } from './LoadingStyles'

type IProps = {
  overlay?: boolean
  className?: string
}

export const Loading: React.FunctionComponent<IProps> = ({
  overlay,
  className
}) => {
  return (
    <Fragment>
      {overlay ? (
        <Overlay>
          <LoadingStyles className={className}>
            <Dot1 />
            <Dot2 />
          </LoadingStyles>
        </Overlay>
      ) : (
        <LoadingStyles className={className}>
          <Dot1 />
          <Dot2 />
        </LoadingStyles>
      )}
    </Fragment>
  )
}
