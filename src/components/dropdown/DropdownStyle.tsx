import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'
import { ChevronDownIcon } from '../icons'
import { InputStyle, Label } from '../input/InputStyle'

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  position: relative;
`

type IDropdownStyleProps = {
  as?: React.ElementType
  errorLabel?: string
}

export const DropdownStyle = styled(InputStyle)<IDropdownStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: ${(props) => `
  inset 0px 0px 0px 1px ${
    props.errorLabel ? JoinbleTheme.errorColor : JoinbleTheme.grey
  }`};
`

type IChevronProps = {
  open?: boolean
}

export const Chevron = styled(ChevronDownIcon)<IChevronProps>`
  stroke: ${JoinbleTheme.primaryColor};
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0)')};
`
type ILabelProps = {
  as?: React.ElementType
}

export const LabelDropdown = styled(Label)<ILabelProps>``
