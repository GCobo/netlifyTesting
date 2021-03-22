import React, {
  FunctionComponent,
  forwardRef,
  Ref,
  useState,
  useEffect
} from 'react';
import { CheckboxCheckedIcon } from '../icons';
import {
  CheckboxContainer,
  CheckboxStyles,
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
      checked = false,
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
    const [check, setCheck] = useState<boolean>(checked);

    useEffect(() => {
      setCheck(checked);
    }, [checked]);

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
        type='button'
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
            onChange={() => {}}
          />
          <CheckboxStyles checked={check}>
            {check && <CheckboxCheckedIcon />}
          </CheckboxStyles>
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
