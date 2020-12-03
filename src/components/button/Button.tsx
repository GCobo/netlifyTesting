import React, { MouseEvent } from 'react'
import { Loading } from '../loading/Loading'
import { ButtonStyles, IconButton } from './ButtonStyles'

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
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export const Button: React.FunctionComponent<IProps> = ({
  type = 'button',
  icon,
  loading,
  children,
  testId,
  ...rest
}) => {
  return (
    <ButtonStyles type={type} {...rest} data-test={testId}>
      {!loading &&
        icon &&
        React.cloneElement(icon, {
          className: IconButton
        })}
      {!loading && children && children}
      {loading && <Loading />}
    </ButtonStyles>
  )
}
