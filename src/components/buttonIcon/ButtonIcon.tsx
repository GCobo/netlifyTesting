import React, {
  cloneElement,
  forwardRef,
  MouseEvent,
  ReactElement,
  Ref
} from 'react';
import { ButtonIconBadget, ButtonIconStyle } from './ButtonIconStyles';
import { Tooltip } from '../tooltip/Tooltip';

export type ButtonIconProps = {
  icon: ReactElement;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  badgets?: boolean;
  secondary?: boolean;
  negative?: boolean;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  testId?: string;
  tooltip?: string;
  bigIcon?: boolean;
  disabled?: boolean;
  ref: Ref<HTMLButtonElement>;
  id?: string;
};

export const ButtonIcon = forwardRef(
  (
    {
      icon,
      badgets,
      type = 'button',
      testId,
      tooltip,
      bigIcon,
      disabled,
      onClick,
      ...rest
    }: ButtonIconProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const renderButton = () => (
      <ButtonIconStyle
        badgets={badgets}
        {...rest}
        type={type}
        ref={ref}
        data-test={testId}
        bigIcon={bigIcon}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
      >
        {cloneElement(icon)}
        {badgets && <ButtonIconBadget />}
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
