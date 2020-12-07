import styled from '@emotion/styled'
import React from 'react'

type IProps = {
  label: string
  className?: string
}

export const ErrorLabel: React.FunctionComponent<IProps> = ({
  label,
  className
}) => {
  const Label = styled.p`
    font-size: ${(props) => props.theme.fonts.fontSizeSmall};
    font-weight: 500;
    line-height: 1.25rem;
    color: ${(props) => props.theme.colors.errorColor};

    &:first-letter {
      text-transform: capitalize;
    }
  `

  return <Label className={className}>{label}</Label>
}
