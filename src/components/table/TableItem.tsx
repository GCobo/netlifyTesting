import React, { FunctionComponent, useMemo, MouseEvent } from 'react';

import { TableListItemLabel } from './Styles';

type IProps = {
  item: any;
  name?: string;
  isSmall?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
  isBold?: boolean;
  isCenter?: boolean;
  testId?: string;
  searchText?: string;
  editable?: boolean;
  isEdit?: boolean;
  onChange?(name: string, value: any): void;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  onToggle?(name: string, value: boolean): void;
  onBlur?(): void;
  toggle?: boolean;
  toggleKey?: string;
  progress?: boolean;
  truncateAt?: number;
  date?: boolean;
};

export const TableItem: FunctionComponent<IProps> = ({
  item,
  isSmall,
  isLarge,
  isMedium,
  testId,
  searchText,
  isEdit = false
}) => {
  const getField = () => {
    return item;
  };

  const fieldValue = useMemo(() => getField(), [item, searchText, isEdit]);

  return <div>{fieldValue}</div>;
};
