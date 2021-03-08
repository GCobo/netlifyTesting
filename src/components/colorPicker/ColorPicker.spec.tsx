import React, { useState } from 'react';
import { mount } from 'cypress-react-unit-test';

import { WrapperTheme } from '../../utils/test';
import { ColorPicker } from './ColorPicker';
import { Modal } from '../modal/Modal';

describe('Color Picker Component', () => {
  it('Should be works', () => {
    mount(
      <WrapperTheme>
        <ColorPicker />
      </WrapperTheme>
    );

    const newColor: string = '123456';

    cy.get('input').click();

    cy.get('.rc-color-picker-panel-params-hex').clear();
    cy.get('.rc-color-picker-panel-params-hex').type(newColor);
    cy.get('body').click(0, 0);

    cy.get('input').should('have.value', `#${newColor}`);
  });

  it('should open from portal', () => {
    const TestComponent = () => {
      const [show, setShow] = useState<boolean>(false);

      return (
        <WrapperTheme>
          <button onClick={() => setShow(true)}>Open Portal</button>
          <Modal show={show} onChangeShow={(show: boolean) => setShow(show)}>
            <ColorPicker />
          </Modal>
        </WrapperTheme>
      );
    };

    mount(<TestComponent />);
  });
});
