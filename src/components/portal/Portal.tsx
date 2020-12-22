import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useRef,
  Fragment,
  useMemo
} from 'react';
import { createPortal } from 'react-dom';

import { PortalContainer } from './styles';
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
  mode = PositionMode.left
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

  const getPosition = useCallback(() => {
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
  }, [actionRef]);

  useEffect(() => {
    const popupRoot = createElement();

    if (actionRef) {
      getPosition();
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleWindowResize);
    document.addEventListener('scroll', handleScroll);

    setElement(popupRoot);
    setMounted(true);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    let timeout;

    if (timeout) {
      window.cancelAnimationFrame(timeout);
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

  useEffect(() => {
    console.log(popupRef.current);
  }, [popupRef.current]);

  const getStyles = useMemo(() => {
    const styles: IPosition = {
      top: position.top,
      width: position.width
    };

    if (mode === PositionMode.left) {
      styles.left = position.left;
    }

    if (mode === PositionMode.right) {
      styles.right = window.innerWidth - position.right!;
    }

    return styles;
  }, [mode, position]);

  return mounted
    ? createPortal(
        <Fragment>
          {show && (
            <PortalContainer
              ref={popupRef}
              className={className}
              style={getStyles}
            >
              {children}
            </PortalContainer>
          )}
        </Fragment>,
        element!
      )
    : null;
};
