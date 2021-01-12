import styled from '@emotion/styled';

import { ItemProps } from './OptionMenuModel';

export const HEIGHT_OPTION_ITEM = '2.5rem';

export const OptionMenuItemList = styled.li<ItemProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${HEIGHT_OPTION_ITEM};
  ${(props) => props.active && 'background-color: #f3f7f9'}
  ${(props) => props.disabled && 'opacity: 0.5'}
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
