import React from 'react'
import { IconWrapper, ButtonStyles } from './ButtonStyles'

type IProps = {
  secondary?: boolean
  disabled?: boolean
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  icon?: React.ReactElement
  testId?: string
}

export const Button: React.FunctionComponent<IProps> = ({
  secondary,
  children,
  disabled,
  type = 'button',
  icon,

  testId
}) => {
  return (
    <ButtonStyles
      type={type}
      disabled={disabled}
      data-test={testId}
      secondary={secondary}
    >
      {icon && (
        <IconWrapper secondary={secondary}>
          {React.cloneElement(icon)}
        </IconWrapper>
      )}
      {children}
    </ButtonStyles>
  )
}
