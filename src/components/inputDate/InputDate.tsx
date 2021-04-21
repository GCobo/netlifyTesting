import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';

import { Input, InputPropsBasic } from '../form';
import { CalendarIcon } from '../icons';
import { InputCalendarWrapper } from './Styles';

const addCss = () => {
  var head = document.head;
  var link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css';

  head.appendChild(link);
};

type IProps = InputPropsBasic & {
  withTime?: boolean;
  minDate?: string;
  maxDate?: string;
  multiple?: boolean;
  range?: boolean;
  onChange?(date: Date[]): void;
};

export const InputDate = ({
  withTime = false,
  minDate,
  maxDate,
  multiple = false,
  range = false,
  onChange = () => {},
  label,
  ...rest
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const mode = () => {
    if (multiple) {
      return 'multiple';
    }

    if (range) {
      return 'range';
    }

    return 'single';
  };

  useEffect(() => {
    addCss();
    if (inputRef) {
      flatpickr(inputRef.current as any, {
        enableTime: withTime,
        dateFormat: withTime ? 'd/m/Y H:i' : 'd/m/Y',
        minDate,
        maxDate,
        mode: mode(),
        onChange: (dates) => {
          onChange && onChange(dates);
        }
      });
    }
  }, [inputRef]);

  return (
    <InputCalendarWrapper withLabel={label ? true : false}>
      <Input
        type='text'
        {...rest}
        ref={inputRef}
        onChange={() => {}}
        label={label}
      />
      <CalendarIcon />
    </InputCalendarWrapper>
  );
};
