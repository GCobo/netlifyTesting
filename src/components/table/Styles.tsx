import styled from '@emotion/styled';

type TableOptionSize = {
  isSmall?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
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

export const TableHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${GAP_COLUMN};
  padding: ${PADDIND_TABLE};
  min-height: 2.5rem;
  background-color: ${(props) => props.theme.colors.primary.greyLight};
  border-radius: 0.25rem 0.25rem 0 0;
`;

export const TableContent = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

export const TableList = styled.ul``;

export const TableListElement = styled.li<TableOptionSize>`
  display: flex;
  align-items: flex-start;
  grid-column-gap: ${GAP_COLUMN};
  min-height: 3.5rem;
  border-bottom: 1px solid #e1e4e8;
  padding-top: 0.75rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
`;

export const TableListItemLabel = styled.span<TableOptionSize>`
  ${(props) => props.theme.fonts.regularText('M')};
  ${(props) => props.isSmall && `flex: 5.5rem`};
  ${(props) => props.isMedium && `flex: 7.5rem`};
  ${(props) => props.isSmall && `flex: 9rem`};
  ${(props) =>
    !props.isSmall && !props.isMedium && !props.isLarge && `flex: 1`};
`;

export const TableHeaderTitle = styled(TableListItemLabel)`
  color: ${(props) => props.theme.colors.system.white};
`;
