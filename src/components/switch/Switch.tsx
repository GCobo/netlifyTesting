import React, { forwardRef, Ref, useEffect, useState } from 'react';
import {
  SwitchContainer,
  SwitchBoxContainer,
  SwitchBoxBox,
  LabelSwitch
} from './SwitchStyles';
import { SwitchProps } from './SwitchModel';
import {
  ErrorLabelCheck,
  FlexCenter,
  HiddenCheckbox
} from '../checkbox/CheckboxStyles';

export const Switch = forwardRef(
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
      onChange
    }: SwitchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [check, setCheck] = useState<boolean>(checked);

    useEffect(() => {
      onChange && onChange(check);
    }, [check]);

    const handleCheck = () => {
      setCheck(!check);
    };

    return (
      <SwitchContainer
        id={id}
        disabled={disabled}
        className={className}
        checked={check}
        onClick={handleCheck}
        data-test={testId}
        errorLabel={errorLabel}
        type='button'
      >
        <FlexCenter>
          {labelLeft && (
            <LabelSwitch disabled={disabled} id={id}>
              {labelLeft}
            </LabelSwitch>
          )}
          <HiddenCheckbox
            type='checkbox'
            defaultChecked={checked}
            disabled={disabled}
            checked={check}
            id={id}
            name={name}
            onChange={() => onChange && onChange(checked)}
            ref={ref}
            value={value}
          />
          <SwitchBoxContainer
            checked={check}
            disabled={disabled}
            errorLabel={errorLabel}
          >
            <SwitchBoxBox checked={check} />
          </SwitchBoxContainer>
          {labelRight && (
            <LabelSwitch disabled={disabled} id={id}>
              {labelRight}
            </LabelSwitch>
          )}
        </FlexCenter>
        {errorLabel && <ErrorLabelCheck label={errorLabel} />}
      </SwitchContainer>
    );
  }
);
