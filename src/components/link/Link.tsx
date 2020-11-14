import React from 'react'
import { LinkStyles } from './LinkStyles'

type IProps = {
  hRef: string
  children?: React.ReactNode
  testId?: string
}

export const Link: React.FunctionComponent<IProps> = ({
  hRef,
  children,
  testId
}) => {
  return (
    <LinkStyles hRef={hRef} data-test={testId}>
      {children}
    </LinkStyles>
  )
}
