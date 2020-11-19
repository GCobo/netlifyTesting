import React from 'react'
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
}

export const Checkbox: React.FunctionComponent<IProps> = ({
  labelLeft,
  labelRight,
  checked,
  disabled,
  id,
  className,
  testId
}) => {
  return (
    <CheckboxContainer disabled={disabled} className={className}>
      {labelLeft && (
        <Label id={id} labelLeft={labelLeft} disabled={disabled}>
          {labelLeft}
        </Label>
      )}
      <HiddenCheckbox
        type='checkbox'
        checked={checked}
        disabled={disabled}
        data-test={testId}
        id={id}
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
