import React, { forwardRef, Ref, useEffect, useState } from 'react';
import {
  SwitchContainer,
  SwitchBoxContainer,
  SwitchBoxBox,
  LabelSwitch,
  HelpLabelInput,
  InputRequired
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
      label,
      checked = false,
      disabled,
      id,
      className,
      testId,
      name,
      value,
      errorLabel,
      onChange,
      helpLabel,
      required = false
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

    const innerLabel = label || labelRight;

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
              {labelLeft} {required && <InputRequired>*</InputRequired>}
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
          {innerLabel && (
            <LabelSwitch disabled={disabled} id={id}>
              {innerLabel} {required && <InputRequired>*</InputRequired>}
            </LabelSwitch>
          )}
        </FlexCenter>
        {errorLabel && <ErrorLabelCheck label={errorLabel} />}
        {helpLabel && <HelpLabelInput label={helpLabel} />}
      </SwitchContainer>
    );
  }
);
