import React, {
  Fragment,
  useRef,
  useState,
  MouseEvent,
  cloneElement,
  useEffect
} from 'react';
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
  open = false,
  testId,
  updateOpen
}: OptionMenuProps) => {
  const buttonMenuRef = useRef(null);

  const [openPortal, setOpenPortal] = useState<boolean>(open);

  useEffect(() => {
    updateOpen && updateOpen(openPortal);
  }, [openPortal]);

  useEffect(() => {
    setOpenPortal(open);
  }, [open]);

  const handleSetOpenPortal = (event: MouseEvent<HTMLDivElement>) => {
    setOpenPortal(!openPortal);
    event.stopPropagation();
  };
  const hiddenSetOpenPortal = () => {
    setOpenPortal(false);
  };

  return (
    <Fragment>
      {cloneElement(renderItem as React.ReactElement, {
        onClick: handleSetOpenPortal,
        className,
        testId,
        ref: buttonMenuRef
      })}
      {openPortal && (
        <Portal
          mode={position}
          actionRef={buttonMenuRef}
          onClickOutside={hiddenSetOpenPortal}
          widthAuto={widthAuto}
          show
        >
          <Transition
            items={openPortal}
            from={{ opacity: 0, transform: 'translate3d(0%, 20px, 0px)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%, 0%, 0px)' }}
            leave={{ opacity: 0, transform: 'translate3d(0%, 20px, 0px)' }}
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
      )}
    </Fragment>
  );
};
