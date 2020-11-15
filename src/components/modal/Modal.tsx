import React from 'react'
import { ModalStyles } from './ModalStyles'

type IProps = {
  children?: React.ReactNode
}

export const Modal: React.FunctionComponent<IProps> = ({ children }) => {
  return <ModalStyles>{children}</ModalStyles>
}
