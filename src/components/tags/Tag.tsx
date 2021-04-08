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
  disabled?: boolean;
};

export const Tag = ({
  label,
  onClick,
  withTooltip,
  type = 'success',
  className,
  testId,
  disabled
}: Props) => {
  const renderTag = () => (
    <TagStyles
      type={type}
      className={className}
      data-test={testId}
      withButton={onClick ? true : false}
      isDisabled={disabled}
    >
      <p>{label}</p>
      {onClick && (
        <TagButtonIcon
          icon={<CloseIcon />}
          onClick={onClick}
          disabled={disabled}
          negative
        />
      )}
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
