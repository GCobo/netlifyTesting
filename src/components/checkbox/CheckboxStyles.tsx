import { JoinbleTheme } from '../../Theme'
import styled from '@emotion/styled/macro'

type ILabelProps = {
  disabled?: boolean
  labelLeft?: string
  labelRight?: string
}

export const Icon = styled.svg``

export const HiddenCheckbox = styled.input`
  border: 0;
  position: absolute;
  width: 10px;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`

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
type ICcheckboxContainerProps = {
  disabled?: boolean
}

export const CheckboxContainer = styled.section<ICcheckboxContainerProps>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : 1)};

  svg {
    fill: ${JoinbleTheme.primaryColor};
  }
  &:hover {
    ${Label} {
      color: ${(props) =>
        !props.disabled ? JoinbleTheme.primaryColor : JoinbleTheme.fontColor};
    }
  }
`
