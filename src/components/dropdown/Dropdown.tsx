import React, { useState } from 'react'
import { HelpLabel } from '../helpLabel/HelpLabel'
import { ErrorInputLabel } from '../input/InputStyle'
import { Chevron, DropdownStyle, LabelDropdown, Wrapper } from './DropdownStyle'

type IProps = {
  label?: string
  errorLabel?: string
  helpLabel?: string
  value?: string
}

export const Dropdown: React.FunctionComponent<IProps> = ({
  label,
  errorLabel,
  helpLabel,
  value
}) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Wrapper>
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
