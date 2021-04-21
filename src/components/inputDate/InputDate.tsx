import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';

import { Input, InputPropsBasic } from '../form';
import { CalendarIcon } from '../icons';
import { InputCalendarWrapper, DateGlobalStyles } from './Styles';

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
  confirmText?: string;
};

export const InputDate = ({
  withTime = false,
  minDate,
  maxDate,
  multiple = false,
  range = false,
  onChange = () => {},
  label,
  confirmText = 'OK',
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
        },
        plugins: withTime
          ? [
              confirmDatePlugin({
                confirmText,
                confirmIcon: ''
              })
            ]
          : []
      });
    }
  }, [inputRef]);

  return (
    <InputCalendarWrapper withLabel={label ? true : false}>
      <DateGlobalStyles />
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
