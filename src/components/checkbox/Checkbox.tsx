import React, { FunctionComponent, forwardRef, Ref } from 'react'
import { CheckboxIcon, CheckboxCheckedIcon } from '../icons'
import { CheckboxContainer, HiddenCheckbox, Label } from './CheckboxStyles'

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
      value
    },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <CheckboxContainer disabled={disabled} className={className}>
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
        {checked ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
        {labelRight && (
          <Label id={id} labelRight={labelRight} disabled={disabled}>
            {labelRight}
          </Label>
        )}
      </CheckboxContainer>
    )
  }
)
