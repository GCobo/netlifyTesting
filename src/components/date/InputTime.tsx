import React, { ChangeEvent } from 'react';

import { Input, InputPropsBasic } from '../form';
import { TimeIcon } from '../icons';
import { InputCalendarWrapper } from './Styles';


type IProps = InputPropsBasic & {
  withTime?: boolean;
  minTime?: string;
  maxTime?: string;
  multiple?: boolean;
  range?: boolean;
  onChange?(date: string): void;
  confirmText?: string;
  errorLabel?: string;
  show?:boolean;
};

export const InputTime = ({
  withTime = false,
  minTime,
  maxTime,
  multiple = false,
  range = false,
  onChange = () => {},
  label,
  errorLabel,
  show = false,
  ...rest
}: IProps) => {

  return (
    <InputCalendarWrapper
      withLabel={label ? true : false}
      errorLabel={errorLabel}
    >
      <Input
        type='time'
        {...rest}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        label={label}
        errorLabel={errorLabel}
      />
      {!errorLabel && <TimeIcon />}
    </InputCalendarWrapper>
  );
};
