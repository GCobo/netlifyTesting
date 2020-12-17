import React, { useEffect, useState } from 'react';
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
};

export const Modal: React.FunctionComponent<IProps> = ({
  children,
  className,
  show = false,
  title,
  onChangeShow,
  actions
}) => {
  const [innerShow, setInnerShow] = useState<boolean>(show);

  useEffect(() => {
    setInnerShow(show);
  }, [show]);

  useEffect(() => {
    onChangeShow && onChangeShow(innerShow);
  }, [innerShow]);

  const onCloseModal = () => {
    setInnerShow(false);
  };

  return (
    <PortalStyles show={innerShow}>
      <ModalStyles className={className}>
        <ModalHeader>
          {title && title}

          <ButtonClose onClick={onCloseModal}>
            <CloseIcon />
          </ButtonClose>
        </ModalHeader>

        {children}

        {actions && <ModalActions>{actions}</ModalActions>}
      </ModalStyles>
      <Overlay onClick={onCloseModal} />
    </PortalStyles>
  );
};
