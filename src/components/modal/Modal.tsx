import React, { useEffect, useState, useMemo } from 'react';
import { useSpring } from 'react-spring';

import { ModalStyles } from './ModalStyles';
import { Overlay } from '../overlay/Overlay';
import {
  PortalStyles,
  ModalHeader,
  ButtonClose,
  ModalActions
} from './ModalStyles';
import { CloseIcon } from '../icons';

type IProps = {
  children?: React.ReactNode;
  className?: string;
  show?: boolean;
  title?: string;
  onChangeShow?(show: boolean): void;
  actions?: React.ReactNode;
  lateral?: boolean;
};

export const Modal: React.FunctionComponent<IProps> = ({
  children,
  className,
  show = false,
  title,
  onChangeShow,
  actions,
  lateral = false
}) => {
  const [innerShow, setInnerShow] = useState<boolean>(show);
  const [animationShow, setAnimationShow] = useState<boolean>(show);

  useEffect(() => {
    setAnimationShow(show);
    setInnerShow(show);
  }, [show]);

  useEffect(() => {
    onChangeShow && onChangeShow(innerShow);
  }, [innerShow]);

  const onCloseModal = () => {
    setAnimationShow(false);
    setTimeout(() => setInnerShow(false), 400);
  };

  const { ...props } = useSpring({
    opacity: animationShow ? 1 : 0,
    config: { duration: 300 }
  });

  const getTransform = useMemo(() => {
    if (lateral) {
      return animationShow
        ? `translate3d(0, 0, 0)`
        : `translate3d(600px, 0, 0)`;
    } else {
      return animationShow ? `scale(1)` : `scale(0.5)`;
    }
  }, [animationShow, lateral]);

  const { ...otherProps } = useSpring({
    transform: getTransform,
    config: { duration: 300 }
  });

  return (
    <PortalStyles show={innerShow}>
      <ModalStyles
        className={className}
        style={{ ...otherProps }}
        lateral={lateral ? true : undefined}
      >
        <ModalHeader lateral={lateral}>
          {title && title}

          <ButtonClose onClick={onCloseModal}>
            <CloseIcon />
          </ButtonClose>
        </ModalHeader>

        {children}

        {actions && <ModalActions lateral={lateral}>{actions}</ModalActions>}
      </ModalStyles>
      <Overlay onClick={onCloseModal} style={{ ...props }} />
    </PortalStyles>
  );
};
