import React, { Fragment, useRef, useState } from 'react';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { Portal } from '../portal/Portal';
import { IOptionMenuProps } from './OptionMenuModel';
import { OptionsMenuWrapper } from './OptionMenuStyles';

export const OptionMenu = ({
  children,
  icon,
  className,
  ...rest
}: IOptionMenuProps) => {
  const buttonMenuRef = useRef<HTMLButtonElement>(null);

  const [openPortal, setOpenPortal] = useState<boolean>(false);

  const handleSetOpenPortal = () => {
    setOpenPortal(!openPortal);
  };

  return (
    <Fragment>
      <ButtonIcon
        icon={icon}
        onClick={handleSetOpenPortal}
        ref={buttonMenuRef}
        className={className}
        testId='button-option-menu'
        {...rest}
      />
      {openPortal && (
        <Portal actionRef={buttonMenuRef} widthAuto show={openPortal}>
          <OptionsMenuWrapper>{children}</OptionsMenuWrapper>
        </Portal>
      )}
    </Fragment>
  );
};
