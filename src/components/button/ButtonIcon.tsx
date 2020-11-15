import React, { MouseEvent } from 'react'
import { ButtonIconStyle } from './ButtonIconStyles'

type IProps = {
  icon: React.ReactElement
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonIcon: React.FunctionComponent<IProps> = ({
  icon,
  onClick
}) => {
  return (
    <ButtonIconStyle onClick={onClick}>
      {React.cloneElement(icon)}
    </ButtonIconStyle>
  )
}
