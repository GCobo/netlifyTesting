import React, { MouseEvent } from 'react';
import { BadgetsStyles, ButtonIconStyle } from './ButtonIconStyles';

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
};

export const ButtonIcon = ({
  icon,
  badgetsNumber,
  type = 'button',
  testId,
  ...rest
}: IProps) => {
  return (
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
};
