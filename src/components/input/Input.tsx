import React, {
  forwardRef,
  Ref,
  ReactElement,
  MouseEvent,
  FunctionComponent
} from 'react'

import { HelpLabel } from '../helpLabel/HelpLabel'
import {
  ErrorInputLabel,
  IconError,
  Label,
  Wrapper,
  InputStyle
} from './InputStyle'

type IProps = {
  errorLabel?: string
  type?: 'text' | 'number' | 'password' | 'email'
  disabled?: boolean
  label: string
  helpLabel?: string
  id?: string
  placeHolder?: string
  icon?: ReactElement
  name?: string
  ref?: Ref<HTMLInputElement>
  className?: string
  onClick?: (event: MouseEvent<HTMLInputElement>) => void
  value?: string | number | string[]
  testId?: string
}

export const Input: FunctionComponent<IProps> = forwardRef(
  (
    {
      errorLabel,
      type = 'text',
      disabled,
      helpLabel,
      label,
      id,
      placeHolder,
      icon,
      name,
      className,
      onClick,
      value,
      testId
    },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <Wrapper icon={icon} className={className}>
        <Label htmlFor={id}>{label}</Label>
        <InputStyle
          type={type}
          id={id}
          disabled={disabled}
          placeholder={placeHolder}
          errorLabel={errorLabel}
          name={name}
          ref={ref}
          onClick={onClick}
          value={value}
          data-test={testId}
          icon={icon}
        />
        {icon && React.cloneElement(icon)}
        {errorLabel && <IconError />}
        {errorLabel && <ErrorInputLabel>{errorLabel}</ErrorInputLabel>}
        {helpLabel && <HelpLabel>{helpLabel}</HelpLabel>}
      </Wrapper>
    )
  }
)
