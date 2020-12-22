import React, { Fragment, useRef, useState, MouseEvent } from 'react';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { PositionMode } from '../portal';
import { Portal } from '../portal/Portal';
import { IOptionMenuProps } from './OptionMenuModel';
import { OptionsMenuWrapper } from './OptionMenuStyles';

export const OptionMenu = ({
  children,
  icon,
  className,
  testId,
  position = PositionMode.left,
  ...rest
}: IOptionMenuProps) => {
  const buttonMenuRef = useRef<HTMLButtonElement>(null);

  const [openPortal, setOpenPortal] = useState<boolean>(false);

  const handleSetOpenPortal = (event: MouseEvent<HTMLButtonElement>) => {
    setOpenPortal(!openPortal);
    event.stopPropagation();
  };

  return (
    <Fragment>
      <ButtonIcon
        icon={icon}
        onClick={handleSetOpenPortal}
        ref={buttonMenuRef}
        className={className}
        testId={testId}
        {...rest}
      />
      {openPortal && (
        <Portal
          actionRef={buttonMenuRef}
          widthAuto
          mode={position}
          show={openPortal}
          onClickOutside={() => setOpenPortal(false)}
        >
          <OptionsMenuWrapper>{children}</OptionsMenuWrapper>
        </Portal>
      )}
    </Fragment>
  );
};
