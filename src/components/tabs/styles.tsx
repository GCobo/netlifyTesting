import styled from '@emotion/styled';

type TabsStyleProps = {
  active?: boolean;
  disabled?: boolean;
};

export const TabStytles = styled.div`
  width: 100%;
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
  height: 2px;
  width: 6.25rem;
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
  grid-column-gap: 0.5rem;
  min-width: 6.25rem;
  padding-bottom: 0.625rem;
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
    width: 0.875rem;
    min-width: 0.875rem;
  }
`;

export const TabPanelContent = styled.div`
  padding-top: 1.75rem;
  width: 100%;
`;
