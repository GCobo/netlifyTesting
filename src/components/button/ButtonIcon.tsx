import React, { MouseEvent } from 'react'
import { ButtonIconStyle } from './ButtonIconStyles'

type IProps = {
  icon: React.ReactElement
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export const ButtonIcon: React.FunctionComponent<IProps> = ({
  icon,
  onClick,
  className
}) => {
  return (
    <ButtonIconStyle onClick={onClick} className={className}>
      {React.cloneElement(icon)}
    </ButtonIconStyle>
  )
}
