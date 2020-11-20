import React, {
  forwardRef,
  Ref,
  ReactElement,
  MouseEvent,
  FunctionComponent,
  useState
} from 'react'
import { ButtonIcon } from '../button'

import { HelpLabel } from '../helpLabel/HelpLabel'
import { HiddenIcon, ShowIcon } from '../icons'
import {
  ErrorInputLabel,
  IconError,
  Label,
  Wrapper,
  InputStyle,
  ShowPassWordIcon
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
    const [passwordShow, setPasswordShow] = useState<boolean>(false)

    const togglePasswordVisiblity = () => {
      setPasswordShow(!passwordShow)
    }

    return (
      <Wrapper icon={icon} className={className}>
        <Label htmlFor={id}>{label}</Label>
        <InputStyle
          type={passwordShow ? 'text' : type}
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
        {type === 'password' && (
          <ShowPassWordIcon>
            <ButtonIcon
              icon={passwordShow ? <HiddenIcon /> : <ShowIcon />}
              onClick={togglePasswordVisiblity}
            />
          </ShowPassWordIcon>
        )}
        {icon && React.cloneElement(icon)}
        {errorLabel && <IconError />}
        {errorLabel && <ErrorInputLabel>{errorLabel}</ErrorInputLabel>}
        {helpLabel && <HelpLabel>{helpLabel}</HelpLabel>}
      </Wrapper>
    )
  }
)
