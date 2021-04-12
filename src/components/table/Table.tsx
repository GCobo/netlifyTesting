import React from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { TableContent, TableElement, TableHeader, TableStyles } from './Styles';

type Props = {
  className?: string;
  testId?: string;
};

export const Table = ({ className, testId }: Props) => {
  return (
    <TableStyles className={className} data-test={testId}>
      <TableHeader>
        <Checkbox />
        <span>header</span>
        <span>header</span>
        <span>header</span>
        <span>header</span>
        <span>header</span>
      </TableHeader>
      <TableContent>
        <TableElement>
          <Checkbox />
          <span>element</span>
          <span>element</span>
          <span>element</span>
          <span>element</span>
          <span>element</span>
        </TableElement>
      </TableContent>
    </TableStyles>
  );
};
