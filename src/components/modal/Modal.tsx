import React from 'react'
import { ModalStyles } from './ModalStyles'

type IProps = {
  children?: React.ReactNode
  className?: string
}

export const Modal: React.FunctionComponent<IProps> = ({
  children,
  className
}) => {
  return <ModalStyles className={className}>{children}</ModalStyles>
}
