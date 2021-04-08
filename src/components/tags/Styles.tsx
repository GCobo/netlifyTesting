import styled from '@emotion/styled';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';

export const TagStyles = styled.div<{
  type?: 'success' | 'warning';
  withButton?: boolean;
  isDisabled?: boolean;
}>`
  border-radius: 0.5rem;
  height: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-gap: 0.5rem;
  padding: 0 ${(props) => (props.withButton ? '0.5rem' : '0.875rem')} 0 0.875rem;
  background-color: ${(props) =>
    props.type === 'success'
      ? props.theme.colors.system.success
      : props.theme.colors.system.warning};
  max-width: 18rem;

  ${(props) =>
    props.isDisabled &&
    `
      opacity: 0.5;
  `}

  p {
    ${(props) => props.theme.fonts.regularText('S')};
    color: ${(props) => props.theme.colors.system.white};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;

    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const TagButtonIcon = styled(ButtonIcon)`
  width: 14px;
  min-width: 14px;
  height: 14px;

  svg {
    min-width: 6px;
    width: 6px;
    height: 6px;
  }
`;
