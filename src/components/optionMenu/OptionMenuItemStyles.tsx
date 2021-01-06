import styled from '@emotion/styled';

export const HEIGHT_OPTION_ITEM = '2.5rem';

export const OptionMenuItemList = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${HEIGHT_OPTION_ITEM};
`;

export const OptionMenuItemStyles = styled.a`
  width: 100%;
  height: ${HEIGHT_OPTION_ITEM};
  display: flex;
  align-items: center;
  ${(props) => props.theme.fonts.regularText('M')};
  color: ${(props) => props.theme.colors.fontColor};
  white-space: nowrap;
  cursor: pointer;
  grid-column-gap: 0.5rem;
  padding: 0 0.25rem;

  &:hover {
    background-color: #f3f7f9;
  }
`;
