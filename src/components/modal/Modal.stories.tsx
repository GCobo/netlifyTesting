import React, { useState } from 'react';

import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {}
};

export const Base = (args: any) => {
  const [show, setShow] = useState<boolean>(false);

  const onShowModal = () => {
    setShow((show) => !show);
  };

  return (
    <Fragment>
      <button onClick={onShowModal} data-test='button-modal'>
        Show Modal
      </button>
      <Modal {...args} show={show}>
        <p>children modal</p>
      </Modal>
    </Fragment>
  );
};
