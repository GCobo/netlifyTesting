import styled from '@emotion/styled'
import React from 'react'
import { HelpIcon } from '../icons'

type IProps = {
  label: string
  className?: string
}

export const HelpLabel: React.FunctionComponent<IProps> = ({
  label,
  className
}) => {
  const HelpWrapper = styled.div`
    display: flex;
    align-items: flex-start;

    svg {
      margin-right: 0.5rem;
      width: 1.5rem;
      min-width: 1.5rem;
      height: 1.5rem;
      fill: ${(props) => props.theme.colors.greyLight};
    }
    p {
      color: ${(props) => props.theme.colors.greyLight};
      font-size: ${(props) => props.theme.fonts.fontSizeSmall};
      font-weight: 500;
      line-height: 1.25rem;
    }
  `

  return (
    <HelpWrapper className={className}>
      <HelpIcon />
      <p>{label}</p>
    </HelpWrapper>
  )
}
