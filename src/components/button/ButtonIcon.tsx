import React, { MouseEvent } from 'react';
import { BadgetsStyles, ButtonIconStyle } from './ButtonIconStyles';
import { Tooltip } from '../tooltip/Tooltip';

type IProps = {
  icon: React.ReactElement;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  badgetsNumber?: number;
  secondary?: boolean;
  negative?: boolean;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  testId?: string;
  tooltip?: string;
};

export const ButtonIcon = ({
  icon,
  badgetsNumber,
  type = 'button',
  testId,
  tooltip,
  ...rest
}: IProps) => {
  const renderButton = () => (
    <ButtonIconStyle
      badgetsNumber={badgetsNumber}
      {...rest}
      type={type}
      data-test={testId}
    >
      {badgetsNumber ? (
        <React.Fragment>
          {React.cloneElement(icon)}
          <BadgetsStyles number={badgetsNumber} />
        </React.Fragment>
      ) : (
        React.cloneElement(icon)
      )}
    </ButtonIconStyle>
  );

  return tooltip ? (
    <Tooltip id={tooltip} label={tooltip}>
      {renderButton()}
    </Tooltip>
  ) : (
    renderButton()
  );
};
