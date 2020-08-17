import { JoinbleTheme } from '../../Theme'
import styled from '@emotion/styled/macro'

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

type ICcheckboxProps = {
  checked?: boolean
}

export const StyledCheckbox = styled.div<ICcheckboxProps>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: ${(props) =>
    props.checked ? JoinbleTheme.primaryColor : 'transparent'};
  border: 1px solid ${JoinbleTheme.primaryColor};
  border-radius: 4px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
type ICcheckboxContainerProps = {
  disabled?: boolean
}

export const CheckboxContainer = styled.section<ICcheckboxContainerProps>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : 1)};
  &:hover {
    ${StyledCheckbox} {
      box-shadow: ${(props) =>
        props.disabled ? 'none' : '0 0 0 2px rgba(66, 153, 225, 0.6)'};
    }
  }
`
type ILabelProps = {
  disabled?: boolean
  labelLeft?: string
  labelRight?: string
}

export const Label = styled.label<ILabelProps>`
  font-size: ${JoinbleTheme.fontSizeMedium};
  color: ${JoinbleTheme.fontColor};
  margin-right: ${(props) => (props.labelLeft ? '0.5rem' : 0)};
  margin-left: ${(props) => (props.labelRight ? '0.5rem' : 0)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:first-letter {
    text-transform: uppercase;
  }
`
