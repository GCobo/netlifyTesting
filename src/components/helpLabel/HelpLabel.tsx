import React from 'react';
import { HelpIcon } from '../icons';
import { HelpLabelStyles } from './HelpLabelStyles';

type IProps = {
  label: string;
  className?: string;
};

export const HelpLabel: React.FunctionComponent<IProps> = ({
  label,
  className
}) => {
  return (
    <HelpLabelStyles className={className}>
      <HelpIcon />
      <p>{label}</p>
    </HelpLabelStyles>
  );
};
