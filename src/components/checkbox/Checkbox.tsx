import React, { FunctionComponent, forwardRef, Ref, useState } from 'react';
import { CheckboxIcon, CheckboxCheckedIcon } from '../icons';
import {
  CheckboxContainer,
  CheckedBoxChecked,
  ErrorLabelCheck,
  FlexCenter,
  HiddenCheckbox,
  LabelCheckbox
} from './CheckboxStyles';

type IProps = {
  labelRight?: string;
  labelLeft?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
  name?: string;
  value?: number | string;
  errorLabel?: string;
};

export const Checkbox: FunctionComponent<IProps> = forwardRef(
  (
    {
      labelLeft,
      labelRight,
      checked,
      disabled,
      id,
      className,
      testId,
      name,
      value,
      errorLabel
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [check, setCheck] = useState<boolean>(false);

    const handleCheck = () => {
      setCheck(!check);
    };
    return (
      <CheckboxContainer
        disabled={disabled}
        className={className}
        checked={check}
        errorLabel={errorLabel}
        onClick={handleCheck}
      >
        <FlexCenter>
          {labelLeft && (
            <LabelCheckbox id={id} disabled={disabled}>
              {labelLeft}
            </LabelCheckbox>
          )}
          <HiddenCheckbox
            type='checkbox'
            defaultChecked={checked}
            disabled={disabled}
            checked={check}
            data-test={testId}
            id={id}
            name={name}
            ref={ref}
            value={value}
          />
          {check ? (
            <CheckedBoxChecked>
              <CheckboxCheckedIcon />
            </CheckedBoxChecked>
          ) : (
            <CheckboxIcon />
          )}
          {labelRight && (
            <LabelCheckbox id={id} disabled={disabled}>
              {labelRight}
            </LabelCheckbox>
          )}
        </FlexCenter>
        {errorLabel && <ErrorLabelCheck label={errorLabel} />}
      </CheckboxContainer>
    );
  }
);
