import React from 'react'
import { LinkStyles } from './LinkStyles'

type IProps = {
  hRef: string
  children?: React.ReactNode
  testId?: string
  className?: string
}

export const Link: React.FunctionComponent<IProps> = ({
  hRef,
  children,
  testId,
  className
}) => {
  return (
    <LinkStyles hRef={hRef} data-test={testId} className={className}>
      {children}
    </LinkStyles>
  )
}
