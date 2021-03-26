import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useRef,
  Fragment,
  useMemo,
  MouseEvent
} from 'react';
import { createPortal } from 'react-dom';

import { PortalContainer, PortalOverlay, PortalContent } from './styles';
import { PortalProps, IPosition, PositionMode } from './PortalModel';

const createElement = () => {
  let popupRoot: HTMLElement | null = document.getElementById('popup-root');

  if (!popupRoot) {
    var div = document.createElement('div');
    div.id = 'popup-root';
    document.body.appendChild(div);

    popupRoot = document.getElementById('popup-root');
  }

  return popupRoot;
};

export const Portal: FunctionComponent<PortalProps> = ({
  show = false,
  children,
  actionRef = null,
  onClickOutside,
  widthAuto = false,
  className,
  mode = PositionMode.left,
  offset,
  testId,
  overlay = false
}) => {
  const [position, setPosition] = useState<IPosition>({
    top: 0,
    left: 0,
    right: 0,
    width: 0
  });

  const [element, setElement] = useState<HTMLElement | null>(null);

  const [mounted, setMounted] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const getPosition = () => {
    if (actionRef.current) {
      const {
        left,
        top,
        right,
        height
      } = actionRef!.current.getBoundingClientRect();

      setPosition({
        left,
        top: top + height,
        right,
        width: widthAuto ? 'auto' : actionRef!.current.clientWidth
      });
    }
  };

  useEffect(() => {
    const popupRoot = createElement();

    if (!overlay) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowResize);
    }

    document.addEventListener('scroll', handleScroll);

    setElement(popupRoot);
    setMounted(true);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);

      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  useEffect(() => {
    if (actionRef) {
      getPosition();
    }
  }, [show, actionRef]);

  const handleScroll = useCallback(() => {
    let timeout;

    if (timeout) {
      if (typeof window !== 'undefined') {
        window.cancelAnimationFrame(timeout);
      }
    }

    timeout = window.requestAnimationFrame(() => {
      actionRef && getPosition();
    });
  }, [actionRef]);

  const handleWindowResize = useCallback(() => {
    actionRef && getPosition();
  }, [actionRef]);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (actionRef) {
          if (actionRef.current && !actionRef.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        } else {
          onClickOutside && onClickOutside();
        }
      }
    },
    [popupRef]
  );

  useEffect(() => {}, [popupRef.current]);

  const getStyles = useMemo(() => {
    const styles: IPosition = {
      top: position.top,
      width: position.width
    };

    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

    if (mode === PositionMode.left) {
      styles.left = position.left;
    }

    if (mode === PositionMode.right) {
      styles.right = windowWidth - position.right!;
    }

    if (styles.left && offset && styles.width) {
      if (styles.left + offset > windowWidth) {
        styles.left = styles.left + styles.width - offset;
      }
    }

    return styles;
  }, [mode, position]);

  return mounted
    ? createPortal(
        <Fragment>
          {show && (
            <Fragment>
              <PortalContainer
                ref={popupRef}
                className={className}
                style={getStyles}
                onMouseDown={(event: MouseEvent<HTMLDivElement>) =>
                  event.stopPropagation()
                }
                data-test={testId}
              >
                {overlay ? (
                  <Fragment>
                    <PortalOverlay
                      data-test={`${testId}-overlay`}
                      onMouseDown={onClickOutside}
                    />
                    <PortalContent>{children}</PortalContent>
                  </Fragment>
                ) : (
                  children
                )}
              </PortalContainer>
            </Fragment>
          )}
        </Fragment>,
        element!
      )
    : null;
};
