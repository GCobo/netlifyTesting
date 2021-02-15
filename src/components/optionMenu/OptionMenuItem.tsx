import React, { MouseEvent } from 'react';
import {
  OptionMenuItemList,
  OptionMenuItemStyles
} from './OptionMenuItemStyles';
import { OptionMenuItemProps } from './OptionMenuModel';

export const OptionMenuItem = ({
  children,
  href,
  onClick,
  className,
  testId,
  active = false,
  disabled = false
}: OptionMenuItemProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleMouseDown = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.stopPropagation();
  };

  return (
    <OptionMenuItemList
      className={className}
      active={active}
      disabled={disabled}
    >
      <OptionMenuItemStyles
        as={href ? 'a' : 'button'}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        href={href && href}
        data-test={testId}
        aria-selected={active}
        aria-disabled={disabled}
        type='button'
        disabled={disabled}
      >
        {children}
      </OptionMenuItemStyles>
    </OptionMenuItemList>
  );
};
