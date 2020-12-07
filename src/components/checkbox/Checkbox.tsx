import React, { FunctionComponent, forwardRef, Ref } from 'react'
import { CheckboxIcon, CheckboxCheckedIcon } from '../icons'
import {
  CheckboxContainer,
  CheckedBoxChecked,
  ErrorLabelCheck,
  FlexCenter,
  HiddenCheckbox,
  Label
} from './CheckboxStyles'

type IProps = {
  labelRight?: string
  labelLeft?: string
  checked?: boolean
  disabled?: boolean
  id?: string
  className?: string
  testId?: string
  ref?: Ref<HTMLInputElement>
  name?: string
  value?: number | string
  errorLabel?: string
}

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
    return (
      <CheckboxContainer
        disabled={disabled}
        className={className}
        checked={checked}
        errorLabel={errorLabel}
      >
        <FlexCenter>
          {labelLeft && (
            <Label id={id} labelLeft={labelLeft} disabled={disabled}>
              {labelLeft}
            </Label>
          )}
          <HiddenCheckbox
            type='checkbox'
            defaultChecked={checked}
            disabled={disabled}
            data-test={testId}
            id={id}
            name={name}
            ref={ref}
            value={value}
          />
          {checked ? (
            <CheckedBoxChecked>
              <CheckboxCheckedIcon />
            </CheckedBoxChecked>
          ) : (
            <CheckboxIcon />
          )}
          {labelRight && (
            <Label id={id} labelRight={labelRight} disabled={disabled}>
              {labelRight}
            </Label>
          )}
        </FlexCenter>
        {errorLabel && <ErrorLabelCheck label={errorLabel} />}
      </CheckboxContainer>
    )
  }
)
