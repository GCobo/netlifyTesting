import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'

type IProps = {
  number?: number
}

export const BadgetsStyle = styled.div<IProps>`
  background-color: ${JoinbleTheme.errorColor};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1rem;
  height: 1rem;
  padding: 0 0.375rem;
  border-radius: ${(props) =>
    props.number && props.number > 9 ? '0.625rem' : '100%'};

  span {
    color: ${JoinbleTheme.lightestColor};
    font-size: 0.625rem;
    display: block;
  }
`
