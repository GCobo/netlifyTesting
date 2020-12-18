import React, { cloneElement } from 'react';
import {
  OptionMenuItemList,
  OptionMenuItemStyles
} from './OptionMenuItemStyles';
import { IOptionMenuItem } from './OptionMenuModel';

export const OptionMenuItem = ({
  children,
  icon,
  href,
  onClick,
  className
}: IOptionMenuItem) => {
  return (
    <OptionMenuItemList className={className}>
      <OptionMenuItemStyles
        as={href ? 'a' : 'button'}
        onClick={onClick && onClick}
        href={href && href}
      >
        {icon && cloneElement(icon)}
        {children}
      </OptionMenuItemStyles>
    </OptionMenuItemList>
  );
};
