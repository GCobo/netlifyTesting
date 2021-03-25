import React, {
  forwardRef,
  FunctionComponent,
  Ref,
  useState,
  useMemo
} from 'react';

import { InputProps } from './Input';
import {
  Wrapper,
  Label,
  InputContainer,
  InputNumericStyles,
  ErrorLabelInput,
  HelpLabelInput,
  ButtonNumeric
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
      min
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [innerValue, setInnerValue] = useState<number>(
      value ? value : defaultValue
    );

    console.log(testId);

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

    return (
      <Wrapper className={className}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <InputContainer errorLabel={errorLabel} disabled={disabled}>
          <ButtonNumeric
            icon={<MinusIcon />}
            onClick={onMinusValue}
            disabled={minusDisabled}
            testId={testId ? `button-minus-${testId}` : undefined}
          />
          <InputNumericStyles
            type={'numeric'}
            id={id}
            disabled={disabled}
            placeholder={placeHolder}
            name={name}
            ref={ref}
            onClick={onClick}
            onChange={onChange}
            value={innerValue}
            data-test={testId}
            readOnly
          />
          <ButtonNumeric
            icon={<PlusIcon />}
            onClick={onAddValue}
            disabled={addDisabled}
            testId={testId ? `button-add-${testId}` : undefined}
          />
        </InputContainer>
        {errorLabel && <ErrorLabelInput label={errorLabel} />}
        {helpLabel && <HelpLabelInput label={helpLabel} />}
      </Wrapper>
    );
  }
);
