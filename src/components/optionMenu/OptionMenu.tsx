import React, { Fragment, useRef, useState, MouseEvent } from 'react';
import { animated, Transition } from 'react-spring/renderprops.cjs';
import { PositionMode } from '../portal';
import { Portal } from '../portal/Portal';
import { OptionMenuProps } from './OptionMenuModel';
import { OptionsMenuWrapper } from './OptionMenuStyles';

export const OptionMenu = ({
  children,
  className,
  position = PositionMode.left,
  renderItem,
  widthAuto = true,
  testId
}: OptionMenuProps) => {
  const buttonMenuRef = useRef<HTMLButtonElement>(null);

  const [openPortal, setOpenPortal] = useState<boolean>(false);

  const handleSetOpenPortal = (event: MouseEvent<HTMLButtonElement>) => {
    setOpenPortal(!openPortal);
    event.stopPropagation();
  };
  const hiddenSetOpenPortal = () => {
    setOpenPortal(false);
  };

  return (
    <Fragment>
      <button
        className={className}
        onClick={handleSetOpenPortal}
        data-test={testId}
        ref={buttonMenuRef}
        aria-controls='option-menu'
        aria-haspopup='true'
      >
        {renderItem}
      </button>
      <Portal
        mode={position}
        actionRef={buttonMenuRef}
        onClickOutside={hiddenSetOpenPortal}
        widthAuto={widthAuto}
        show
      >
        <Transition
          items={openPortal}
          from={{ opacity: 0, transform: 'translate3d(0%, -100%, 0px)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%, 0%, 0px)' }}
          leave={{ opacity: 0, transform: 'translate3d(0%, -100%, 0px)' }}
        >
          {(openPortal) =>
            openPortal &&
            ((props) => (
              <animated.div style={{ ...props }}>
                <OptionsMenuWrapper id='option-menu'>
                  {children}
                </OptionsMenuWrapper>
              </animated.div>
            ))
          }
        </Transition>
      </Portal>
    </Fragment>
  );
};
