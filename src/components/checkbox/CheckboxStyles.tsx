import styled from '@emotion/styled/macro'

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
}

export const CheckboxContainer = styled.section<ICcheckboxContainerProps>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : 1)};

  svg {
    fill: ${(props) => props.theme.colors.primaryColor};
  }
  &:hover {
    ${Label} {
      color: ${(props) =>
        !props.disabled
          ? props.theme.colors.primaryColor
          : props.theme.colors.fontColor};
    }
  }
`
