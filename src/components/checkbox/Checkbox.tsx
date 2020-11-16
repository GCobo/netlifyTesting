import React from 'react'
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  Label,
  StyledCheckbox
} from './CheckboxStyles'

type IProps = {
  labelRight?: string
  labelLeft?: string
  checked?: boolean
  disabled?: boolean
  id?: string
  className?: string
}

export const Checkbox: React.FunctionComponent<IProps> = ({
  labelLeft,
  labelRight,
  checked,
  disabled,
  id,
  className
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
        id={id}
      />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
      {labelRight && (
        <Label id={id} labelRight={labelRight} disabled={disabled}>
          {labelRight}
        </Label>
      )}
    </CheckboxContainer>
  )
}
