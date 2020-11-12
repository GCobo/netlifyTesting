import React from 'react'
import { Loading } from '../loading/Loading'
import { IconWrapper, ButtonStyles } from './ButtonStyles'

type IProps = {
  secondary?: boolean
  disabled?: boolean
  children?: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  icon?: React.ReactElement
  testId?: string
  loading?: boolean
  warning?: boolean
  error?: boolean
  success?: boolean
}

export const Button: React.FunctionComponent<IProps> = ({
  secondary,
  children,
  disabled,
  type = 'button',
  icon,
  loading,
  warning,
  error,
  success,
  testId
}) => {
  return (
    <ButtonStyles
      type={type}
      disabled={disabled}
      data-test={testId}
      secondary={secondary}
      warning={warning}
      error={error}
      success={success}
    >
      {!loading && icon && (
        <IconWrapper secondary={secondary}>
          {React.cloneElement(icon)}
        </IconWrapper>
      )}
      {!loading && children && children}
      {loading && <Loading />}
    </ButtonStyles>
  )
}
