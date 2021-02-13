import React, { Fragment, useState } from 'react';
import { mount } from 'cypress-react-unit-test';
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
      <button onClick={onShowModal}>Show Modal</button>
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
        This is the modal
      </Modal>
    </WrapperTheme>
  );
};

const ModalonModal = () => {
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);

  const onShowModal = () => {
    setShow((show) => !show);
  };

  return (
    <WrapperTheme>
      <button onClick={onShowModal} data-test='button-open-modal1'>
        Show Modal
      </button>
      <Modal
        show={show}
        title='Title Modal'
        onChangeShow={(s) => setShow(s)}
        actions={
          <Fragment>
            <Button>Cancel</Button>
            <Button onClick={() => setShow2(true)} testId='button-open-modal2'>
              Show Modal2
            </Button>
          </Fragment>
        }
      >
        This is the modal
      </Modal>
      <Modal show={show2} onChangeShow={(show: boolean) => setShow2(show)}>
        Modal two
      </Modal>
    </WrapperTheme>
  );
};

describe('Modal component', () => {
  it('works', () => {
    mount(<ModalComponent />);

    cy.get('button').click();

    cy.contains('This is the modal').should('be.visible');
  });

  it('should show modal lateral', () => {
    mount(<ModalComponent lateral />);

    cy.get('button').click();
    cy.contains('This is the modal').should('be.visible');
  });
});
