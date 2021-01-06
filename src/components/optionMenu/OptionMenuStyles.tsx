import styled from '@emotion/styled';

export const PADDING_X_OPTION_MENU = '1rem';

export const OptionsMenuWrapper = styled.ul`
  padding: 1rem 0.5rem;
  border: solid 1px #e9f0f4;
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 35px rgba(154, 161, 171, 0.3);
  padding: ${PADDING_X_OPTION_MENU} 0.5rem;
`;
