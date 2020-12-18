import React, {
  cloneElement,
  forwardRef,
  Fragment,
  MouseEvent,
  ReactElement,
  Ref
} from 'react';
import { BadgetsStyles, ButtonIconStyle } from './ButtonIconStyles';
import { Tooltip } from '../tooltip/Tooltip';

export type ButtonIconProps = {
  icon: ReactElement;
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

export const ButtonIcon = forwardRef(
  (
    {
      icon,
      badgetsNumber,
      type = 'button',
      testId,
      tooltip,
      ...rest
    }: ButtonIconProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const renderButton = () => (
      <ButtonIconStyle
        badgetsNumber={badgetsNumber}
        {...rest}
        type={type}
        ref={ref}
        data-test={testId}
      >
        {badgetsNumber ? (
          <Fragment>
            {cloneElement(icon)}
            <BadgetsStyles number={badgetsNumber} />
          </Fragment>
        ) : (
          cloneElement(icon)
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
  }
);
