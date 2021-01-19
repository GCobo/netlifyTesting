import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { WrapperTheme } from '../../utils/test';
import { ColorPicker } from './ColorPicker';

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
});
