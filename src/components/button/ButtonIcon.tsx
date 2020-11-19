import React, { MouseEvent } from 'react'
import { BadgetsStyles, ButtonIconStyle } from './ButtonIconStyles'

type IProps = {
  icon: React.ReactElement
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  className?: string
  badgetsNumber?: number
  secondary?: boolean
}

export const ButtonIcon: React.FunctionComponent<IProps> = ({
  icon,
  onClick,
  className,
  badgetsNumber,
  secondary
}) => {
  return (
    <ButtonIconStyle
      badgetsNumber={badgetsNumber}
      onClick={onClick}
      className={className}
      secondary={secondary}
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
