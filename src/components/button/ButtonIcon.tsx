import React, { MouseEvent } from 'react'
import { BadgetsStyles, ButtonIconStyle } from './ButtonIconStyles'

type IProps = {
  icon: React.ReactElement
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  className?: string
  badgetsNumber?: number
  secondary?: boolean
  negative?: boolean
}

export const ButtonIcon = ({
  icon,
  onClick,
  className,
  badgetsNumber,
  secondary,
  negative
}: IProps) => {
  return (
    <ButtonIconStyle
      badgetsNumber={badgetsNumber}
      onClick={onClick}
      className={className}
      secondary={secondary}
      negative={negative}
    >
      {badgetsNumber ? (
        <React.Fragment>
          {React.cloneElement(icon)}
          <BadgetsStyles number={badgetsNumber} />
        </React.Fragment>
      ) : (
        React.cloneElement(icon)
      )}
    </ButtonIconStyle>
  )
}
