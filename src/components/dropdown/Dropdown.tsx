import React, { useState } from 'react'
import { HelpLabel } from '../helpLabel/HelpLabel'
import { ErrorInputLabel } from '../input/InputStyle'
import { Chevron, DropdownStyle, LabelDropdown, Wrapper } from './DropdownStyle'

type IProps = {
  label?: string
  errorLabel?: string
  helpLabel?: string
  value?: string
  className?: string
}

export const Dropdown: React.FunctionComponent<IProps> = ({
  label,
  errorLabel,
  helpLabel,
  value,
  className
}) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Wrapper className={className}>
      <LabelDropdown as='p'>{label}</LabelDropdown>
      <DropdownStyle as='button' onClick={handleOpen} errorLabel={errorLabel}>
        <span> {value}</span>
        <Chevron open={open} />
      </DropdownStyle>
      {errorLabel && <ErrorInputLabel>{errorLabel}</ErrorInputLabel>}
      {helpLabel && <HelpLabel>{helpLabel}</HelpLabel>}
    </Wrapper>
  )
}
