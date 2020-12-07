import styled from '@emotion/styled/macro'
import { ErrorLabel } from '../errorLabel/ErrorLabel'

type ILabelProps = {
  disabled?: boolean
  labelLeft?: string
  labelRight?: string
}

export const HiddenCheckbox = styled.input`
  border: 0;
  position: absolute;
  width: 10px;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`

export const Label = styled.label<ILabelProps>`
  font-size: ${(props) => props.theme.fonts.fontSizeMedium};
  color: ${(props) => props.theme.colors.fontColor};
  margin-right: ${(props) => (props.labelLeft ? '0.5rem' : 0)};
  margin-left: ${(props) => (props.labelRight ? '0.5rem' : 0)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:first-letter {
    text-transform: uppercase;
  }
`
type ICcheckboxContainerProps = {
  disabled?: boolean
  checked?: boolean
  errorLabel?: string
}

export const CheckboxContainer = styled.section<ICcheckboxContainerProps>`
  display: flex;
  flex-flow: ${(props) => (props.errorLabel ? 'column' : 'row')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : 1)};

  svg {
    fill: ${(props) =>
      props.checked
        ? props.theme.colors.lightestColor
        : props.errorLabel
        ? props.theme.colors.errorColor
        : props.theme.colors.fontColor};
  }

  &:hover {
    ${Label} {
      color: ${(props) =>
        !props.disabled
          ? props.theme.colors.primaryColor
          : props.theme.colors.fontColor};
    }
    svg {
      fill: ${(props) =>
        props.checked
          ? props.theme.colors.lightestColor
          : props.disabled
          ? props.theme.colors.fontColor
          : props.theme.colors.primaryColor};
    }
  }
`

export const CheckedBoxChecked = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;

  svg {
    fill: ${(props) => props.theme.colors.lightestColor};
    width: 1rem;
    height: 0.75rem;
  }
`

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`

export const ErrorLabelCheck = styled(ErrorLabel)`
  margin-top: 0.25rem;
`
