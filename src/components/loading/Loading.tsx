import React, { Fragment } from 'react'
import { Overlay } from '../overlay/Overlay'
import { LoadingStyles, Dot1, Dot2 } from './LoadingStyles'

type IProps = {
  overlay?: boolean
}

export const Loading: React.FunctionComponent<IProps> = ({ overlay }) => {
  return (
    <Fragment>
      {overlay ? (
        <Overlay>
          <LoadingStyles>
            <Dot1 />
            <Dot2 />
          </LoadingStyles>
        </Overlay>
      ) : (
        <LoadingStyles>
          <Dot1 />
          <Dot2 />
        </LoadingStyles>
      )}
    </Fragment>
  )
}
