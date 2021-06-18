import React, {
  forwardRef,
  FunctionComponent,
  Ref,
  useState,
  useMemo,
  ChangeEvent
} from 'react';

import { InputProps } from './Input';
import {
  Wrapper,
  Label,
  InputNumericStyles,
  ErrorLabelInput,
  HelpLabelInput,
  ButtonNumeric,
  InputRequired,
  ButtonNumericContainer
} from './Styles';
import { PlusIcon, MinusIcon } from '../icons';

type NumericInputProps = InputProps & {
  defaultValue?: number;
  onChange?(value: number): void;
  value?: number;
  max?: number;
  min?: number;
  testId?: string;
};

export const InputNumeric: FunctionComponent<NumericInputProps> = forwardRef(
  (
    {
      errorLabel,
      disabled,
      helpLabel,
      label,
      id,
      placeHolder,
      name,
      className,
      onClick,
      value,
      testId,
      onChange,
      defaultValue = 0,
      max,
      min,
      required
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [innerValue, setInnerValue] = useState<number>(
      value ? value : defaultValue
    );

    const onAddValue = () => {
      const number = innerValue + 1;
      setInnerValue(number);
      onChange && onChange(number);
    };

    const onMinusValue = () => {
      const number = innerValue - 1;
      setInnerValue(number);
      onChange && onChange(number);
    };

    const addDisabled = useMemo(() => {
      if (max === undefined) {
        return false;
      } else {
        if (max === innerValue) {
          return true;
        }
      }
      return false;
    }, [max, innerValue]);

    const minusDisabled = useMemo(() => {
      if (min === undefined) {
        return false;
      } else {
        if (min === innerValue) {
          return true;
        }
      }
      return false;
    }, [min, innerValue]);

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(event.target.value);

      if (typeof value === 'number') {
        setInnerValue(value);
      }
    };

    return (
      <Wrapper className={className}>
        {label && (
          <Label htmlFor={id}>
            {label} {required && <InputRequired>*</InputRequired>}
          </Label>
        )}
        <ButtonNumericContainer errorLabel={errorLabel} disabled={disabled}>
          <ButtonNumeric
            icon={<MinusIcon />}
            disabled={minusDisabled}
            onClick={onMinusValue}
            testId={testId ? `button-minus-${testId}` : undefined}
          />
          <InputNumericStyles
            type={'number'}
            id={id}
            disabled={disabled}
            placeholder={placeHolder}
            name={name}
            ref={ref}
            onClick={onClick}
            onChange={onChangeValue}
            value={innerValue}
            data-test={testId}
          />
          <ButtonNumeric
            icon={<PlusIcon />}
            disabled={addDisabled}
            onClick={onAddValue}
            testId={testId ? `button-add-${testId}` : undefined}
          />
        </ButtonNumericContainer>
        {errorLabel && <ErrorLabelInput label={errorLabel} />}
        {helpLabel && <HelpLabelInput label={helpLabel} />}
      </Wrapper>
    );
  }
);
