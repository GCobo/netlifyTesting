import React from 'react'
import { ButtonIconStyle } from './ButtonIconStyles'

type IProps = {
  icon: React.ReactElement
}

export const ButtonIcon: React.FunctionComponent<IProps> = ({ icon }) => {
  return <ButtonIconStyle>{React.cloneElement(icon)} </ButtonIconStyle>
}
