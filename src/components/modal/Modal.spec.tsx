import React, { useState } from 'react';
import { mount } from 'cypress-react-unit-test';
import { Modal } from './Modal';
import { Button } from '../button/Button';
import { JoinbleThemeProvider } from '../../providers';

const ModalComponent = () => {
  const [show, setShow] = useState<boolean>(false);

  const onShowModal = () => {
    setShow((show) => !show);
  };

  return (
    <JoinbleThemeProvider>
      <button onClick={onShowModal}>Show Modal</button>
      <Modal
        show={show}
        title='Title Modal'
        onChangeShow={(s) => setShow(s)}
        actions={
          <>
            <Button>Cancel</Button>
            <Button>Delete</Button>
          </>
        }
      >
        This is the modal
      </Modal>
    </JoinbleThemeProvider>
  );
};

describe('Modal component', () => {
  it('works', () => {
    mount(<ModalComponent />);

    cy.get('button').click();

    cy.contains('This is the modal').should('be.visible');
  });
});
