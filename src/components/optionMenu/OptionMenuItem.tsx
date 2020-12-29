import React from 'react';
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
  testId
}: OptionMenuItemProps) => {
  return (
    <OptionMenuItemList className={className}>
      <OptionMenuItemStyles
        as={href ? 'a' : 'button'}
        onClick={onClick && onClick}
        href={href && href}
        data-test={testId}
      >
        {children}
      </OptionMenuItemStyles>
    </OptionMenuItemList>
  );
};
