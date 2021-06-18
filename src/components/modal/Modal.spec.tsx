import React, { Fragment, useState } from 'react';
import { mount } from '@cypress/react';
import { Modal } from './Modal';
import { Button } from '../button/Button';
import { WrapperTheme } from '../../utils/test';

const ModalComponent = ({ lateral = false }: any) => {
  const [show, setShow] = useState<boolean>(false);

  const onShowModal = () => {
    setShow((show) => !show);
  };

  return (
    <WrapperTheme>
      <button onClick={onShowModal} data-test='button-modal'>
        Show Modal
      </button>
      <Modal
        show={show}
        title='Title Modal'
        lateral={lateral}
        onChangeShow={(s) => setShow(s)}
        actions={
          <Fragment>
            <Button>Cancel</Button>
            <Button>Delete</Button>
          </Fragment>
        }
      >
        <p>This is the modal</p>
      </Modal>
    </WrapperTheme>
  );
};

describe('Modal component', () => {
  it('works', () => {
    mount(<ModalComponent />);

    cy.get('[data-test="button-modal"]').click();
    cy.contains('This is the modal').should('be.visible');
  });

  it('should show modal lateral', () => {
    mount(<ModalComponent lateral />);

    cy.get('[data-test="button-modal"]').click();
    cy.contains('This is the modal').should('be.visible');
  });
});
