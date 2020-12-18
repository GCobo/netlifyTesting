import React from 'react';
import { BadgetsStyle } from './BadgetsStyles';

type IProps = {
  number?: number;
  className?: string;
  testId?: string;
};

export const Badgets: React.FunctionComponent<IProps> = ({
  number,
  className,
  testId
}) => {
  return (
    <BadgetsStyle className={className} number={number} data-test={testId}>
      {number && <span>{number > 99 ? '99+' : number}</span>}
    </BadgetsStyle>
  );
};
