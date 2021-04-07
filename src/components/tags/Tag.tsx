import React from 'react';
import { CloseIcon } from '../icons';
import { Tooltip } from '../tooltip/Tooltip';
import { TagButtonIcon, TagStyles } from './Styles';

type Props = {
  label: string;
  onClick?(): void;
  withTooltip?: boolean;
  type?: 'success' | 'warning';
  className?: string;
  testId?: string;
};

export const Tag = ({
  label,
  onClick,
  withTooltip,
  type = 'success',
  className,
  testId
}: Props) => {
  const renderTag = () => (
    <TagStyles
      type={type}
      onClick={onClick}
      className={className}
      data-test={testId}
    >
      <p>{label}</p>
      {onClick && <TagButtonIcon icon={<CloseIcon />} negative />}
    </TagStyles>
  );

  return withTooltip ? (
    <Tooltip id='tag' label={label}>
      {renderTag()}
    </Tooltip>
  ) : (
    renderTag()
  );
};
