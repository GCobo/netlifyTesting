import styled from '@emotion/styled';

type IProps = {
  number?: number;
};

export const BadgetsStyle = styled.div<IProps>`
  background-color: ${(props) => props.theme.colors.system.error};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1rem;
  height: 1rem;
  padding: 0 0.375rem;
  border-radius: ${(props) =>
    props.number && props.number > 9 ? '0.625rem' : '100%'};

  span {
    color: ${(props) => props.theme.colors.system.white};
    font-size: 0.625rem;
    display: block;
  }
`;
