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
  show?: boolean;
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
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <InputCalendarWrapper
      withLabel={label ? true : false}
      errorLabel={errorLabel}
    >
      <Input
        type='time'
        {...rest}
        onChange={onChangeHandler}
        label={label}
        errorLabel={errorLabel}
        max={maxTime}
        min={minTime}
      />
      {!errorLabel && <TimeIcon />}
    </InputCalendarWrapper>
  );
};
