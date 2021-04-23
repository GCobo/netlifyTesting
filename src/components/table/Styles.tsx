import styled from '@emotion/styled';

type TableOptionSize = {
  small?: boolean;
  medium?: boolean;
  big?: boolean;
};

const PADDIND_TABLE = '0.5rem 0.5rem 0.5rem 1rem';
const GAP_COLUMN = '0.875rem';

export const TableStyles = styled.div`
  box-shadow: 0px 0px 0px 1px #e1e4e8;
  border-radius: 0.25rem;
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const TableHeaderStyles = styled.div<TableOptionSize>`
  display: flex;
  align-items: center;
  grid-column-gap: ${GAP_COLUMN};
  padding: ${PADDIND_TABLE};
  min-height: 2.5rem;
  background-color: ${(props) => props.theme.colors.primary.greyLight};
  border-radius: 0.25rem 0.25rem 0 0;

  span {
    ${(props) => props.theme.fonts.regularText('M')};
    color: ${(props) => props.theme.colors.system.white};
    ${(props) => props.small && `flex: 5.5rem`};
    ${(props) => props.medium && `flex: 7.5rem`};
    ${(props) => props.small && `flex: 9rem`};
    ${(props) => !props.small && !props.medium && !props.big && `flex: 1`}
  }
`;

export const TableContent = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

export const TableList = styled.li<TableOptionSize>`
  display: flex;
  align-items: flex-start;
  grid-column-gap: ${GAP_COLUMN};
  min-height: 3.5rem;
  border-bottom: 1px solid #e1e4e8;
  padding-top: 0.75rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;

  span {
    ${(props) => props.theme.fonts.regularText('S')};
    color: ${(props) => props.theme.colors.primary.greyDark};
    ${(props) => props.small && `flex: 5.5rem`};
    ${(props) => props.medium && `flex: 7.5rem`};
    ${(props) => props.small && `flex: 9rem`};
    ${(props) => !props.small && !props.medium && !props.big && `flex: 1`}
  }
`;

export const TableListItemLabel = styled.span<TableOptionSize>`
  padding-left: 1.6rem;
  ${(props) => props.theme.fonts.regularText('M')};
  flex: 1;
  ${(props) => props.small && `flex: 0 0 8rem`};
  ${(props) => props.medium && `flex: 0 0 12rem`};
  ${(props) => props.big && `flex: 0 0 20rem`};
`;
