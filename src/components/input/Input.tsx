import React, {
  forwardRef,
  Ref,
  ReactElement,
  MouseEvent,
  FunctionComponent,
  useState
} from 'react'
import { HiddenIcon, ShowIcon } from '../icons'
import {
  IconError,
  Label,
  Wrapper,
  InputStyle,
  InputIcon,
  ButtonPassword,
  HelpLabelInput,
  ErrorLabelInput
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
      <Wrapper className={className}>
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
          passwordShow={passwordShow}
        />
        {type === 'password' && (
          <ButtonPassword
            icon={passwordShow ? <HiddenIcon /> : <ShowIcon />}
            onClick={togglePasswordVisiblity}
          />
        )}
        {icon &&
          !errorLabel &&
          React.cloneElement(icon, { className: InputIcon })}
        {errorLabel && <IconError />}
        {errorLabel && <ErrorLabelInput>{errorLabel}</ErrorLabelInput>}
        {helpLabel && <HelpLabelInput>{helpLabel}</HelpLabelInput>}
      </Wrapper>
    )
  }
)
