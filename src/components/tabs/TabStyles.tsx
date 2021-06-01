import styled from '@emotion/styled';
import { rem } from 'polished';

type TabsStyleProps = {
  active?: boolean;
  disabled?: boolean;
};

export const TabStytles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TabWrapper = styled.ul`
  display: flex;
  box-shadow: inset 0px -2px 0px 0px ${(props) => props.theme.colors.primary.greyLight};
  position: relative;
  width: 100%;
`;

export const TabBar = styled.span`
  position: absolute;
  bottom: 0;
  height: ${rem(2)};
  width: ${rem(100)};
  background-color: ${(props) => props.theme.colors.primary.greenLight};
  transition: left 0.2s ease-in-out;
`;

export const TabsStyle = styled.button<TabsStyleProps>`
  color: ${(props) =>
    props.disabled
      ? props.theme.colors.primary.greyLight
      : props.active
      ? props.theme.colors.primary.greenLight
      : props.theme.colors.primary.greyDark};
  fill: ${(props) =>
    props.disabled
      ? props.theme.colors.primary.greyLight
      : props.active
      ? props.theme.colors.primary.greenLight
      : props.theme.colors.primary.greyDark};
  ${(props) => props.theme.fonts.regularText('M')};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-gap: ${rem(8)};
  min-width: ${rem(100)};
  padding-bottom: ${rem(10)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  position: relative;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    color: ${(props) =>
      props.disabled
        ? props.theme.colors.primary.greyLight
        : props.theme.colors.primary.greenLight};
    fill: ${(props) =>
      props.disabled
        ? props.theme.colors.primary.greyLight
        : props.theme.colors.primary.greenLight};
  }

  svg {
    fill: inherit;
    width: ${rem(14)};
    min-width: ${rem(14)};
  }
`;

export const TabPanelContent = styled.div`
  padding-top: ${rem(28)};
  width: 100%;
  height: 100%;
`;

export const TabPanelStyles = styled.div`
  height: 100%;
`;
