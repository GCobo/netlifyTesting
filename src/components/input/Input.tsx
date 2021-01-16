import React, {
  forwardRef,
  Ref,
  ReactElement,
  MouseEvent,
  FunctionComponent,
  useState,
  ChangeEvent
} from 'react';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { AlertIcon, HiddenIcon, ShowIcon } from '../icons';
import {
  Label,
  Wrapper,
  InputStyle,
  HelpLabelInput,
  ErrorLabelInput,
  InputContainer
} from './InputStyle';

export type InputContainerProps = {
  disabled?: boolean;
  errorLabel?: string;
};

export interface InputProps extends InputContainerProps {
  type?: 'text' | 'number' | 'password' | 'email';
  label?: string;
  helpLabel?: string;
  id?: string;
  placeHolder?: string;
  icon?: ReactElement;
  name?: string;
  ref?: Ref<HTMLInputElement>;
  className?: string;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  value?: string | number | string[];
  testId?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const Input: FunctionComponent<InputProps> = forwardRef(
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
      testId,
      onChange
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [passwordShow, setPasswordShow] = useState<boolean>(false);

    const togglePasswordVisiblity = () => {
      setPasswordShow(!passwordShow);
    };

    return (
      <Wrapper className={className}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <InputContainer errorLabel={errorLabel} disabled={disabled}>
          <InputStyle
            type={passwordShow ? 'text' : type}
            id={id}
            disabled={disabled}
            placeholder={placeHolder}
            name={name}
            ref={ref}
            onClick={onClick}
            onChange={onChange}
            value={value}
            data-test={testId}
          />
          {type === 'password' && (
            <ButtonIcon
              icon={passwordShow ? <HiddenIcon /> : <ShowIcon />}
              type='button'
              tabIndex={-1}
              onClick={togglePasswordVisiblity}
            />
          )}
          {icon && !errorLabel && React.cloneElement(icon)}
          {errorLabel && type !== 'password' && <AlertIcon />}
        </InputContainer>
        {errorLabel && <ErrorLabelInput label={errorLabel} />}
        {helpLabel && <HelpLabelInput label={helpLabel} />}
      </Wrapper>
    );
  }
);
