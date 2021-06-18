import React, { forwardRef, FunctionComponent, Ref, useEffect, useState } from 'react';

import { InputRequired } from '../form';
import { CheckboxCheckedIcon } from '../icons';
import {
    CheckboxContainer, CheckboxStyles, ErrorLabelCheck, FlexCenter, HiddenCheckbox, LabelCheckbox
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
  onChange?(checked: boolean): void;
  required?: boolean;
};

export const Checkbox: FunctionComponent<IProps> = forwardRef(
  (
    {
      labelLeft,
      labelRight,
      checked = false,
      disabled,
      id,
      className,
      testId,
      name,
      value,
      errorLabel,
      onChange,
      required = false
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [check, setCheck] = useState<boolean>(checked);

    useEffect(() => {
      setCheck(checked);
    }, [checked]);

    const handleCheck = () => {
      setCheck(!check);
      onChange && onChange(!check);
    };
    return (
      <CheckboxContainer
        disabled={disabled}
        className={className}
        checked={check}
        errorLabel={errorLabel}
        onClick={handleCheck}
        type='button'
      >
        <FlexCenter>
          {labelLeft && (
            <LabelCheckbox id={id} disabled={disabled}>
              {labelLeft} {required && <InputRequired>*</InputRequired>}
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
            onChange={() => {}}
          />
          <CheckboxStyles checked={check}>
            {check && <CheckboxCheckedIcon />}
          </CheckboxStyles>
          {labelRight && (
            <LabelCheckbox id={id} disabled={disabled}>
              {labelRight} {required && <InputRequired>*</InputRequired>}
            </LabelCheckbox>
          )}
        </FlexCenter>
        {errorLabel && <ErrorLabelCheck label={errorLabel} />}
      </CheckboxContainer>
    );
  }
);
