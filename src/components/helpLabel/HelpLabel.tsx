import styled from '@emotion/styled'
import React from 'react'
import { JoinbleTheme } from '../../Theme'
import { HelpIcon } from '../icons'

type IProps = {
  children: string
  className?: string
}

export const HelpLabel: React.FunctionComponent<IProps> = ({
  children,
  className
}) => {
  const HelpWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 0.5rem;

    svg {
      margin-right: 0.5rem;
      width: 1.5rem;
      min-width: 1.5rem;
      height: 1.5rem;
      stroke: ${JoinbleTheme.greyLight};
    }
    p {
      color: ${JoinbleTheme.greyLight};
      font-size: ${JoinbleTheme.fontSizeSmall};
      font-weight: 500;
      line-height: 1.25rem;
    }
  `

  return (
    <HelpWrapper className={className}>
      <HelpIcon />
      <p>{children}</p>
    </HelpWrapper>
  )
}
