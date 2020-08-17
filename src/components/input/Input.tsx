import React from 'react'
import { HelpLabel } from '..'
import {
  ErrorInputLabel,
  IconError,
  Label,
  Wrapper,
  InputStyle
} from './InputStyle'

type IProps = {
  errorLabel?: string
  inputType?: 'text' | 'number' | 'password' | 'email'
  disabled?: boolean
  label: string
  helpLabel?: string
  id?: string
  placeHolder?: string
  icon?: React.ReactElement
}

export const Input: React.FunctionComponent<IProps> = ({
  errorLabel,
  inputType = 'text',
  disabled,
  helpLabel,
  label,
  id,
  placeHolder,
  icon
}) => {
  return (
    <Wrapper icon={icon}>
      <Label htmlFor={id}>{label}</Label>
      <InputStyle
        type={inputType}
        id={id}
        disabled={disabled}
        placeholder={placeHolder}
        errorLabel={errorLabel}
      />
      {icon && React.cloneElement(icon)}
      {errorLabel && <IconError />}
      {errorLabel && <ErrorInputLabel>{errorLabel}</ErrorInputLabel>}
      {helpLabel && <HelpLabel>{helpLabel}</HelpLabel>}
    </Wrapper>
  )
}
