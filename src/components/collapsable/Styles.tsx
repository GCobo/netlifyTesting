import styled from '@emotion/styled';

export const CollapseWrapper = styled.ul`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  height: 100%;

  > li {
    display: flex;
    flex-direction: column;
  }
`;

export const CollapsableItemHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${(props) => props.theme.fonts.regularText('M')};
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary.greyDark};
  fill: ${(props) => props.theme.colors.primary.greyDark};

  svg {
    display: block;
    transition: transform 0.2s ease-in-out;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    width: 0.75rem;
  }
`;
