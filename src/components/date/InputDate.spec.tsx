/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { InputDate } from './InputDate';
import { WrapperTheme } from '../../utils/test';
import { Modal } from '../modal/Modal';

const TestComponent = () => {
  return (
    <WrapperTheme>
      <Modal show>
        <InputDate
          placeHolder='DD / MM / YYYY hh:mm'
          onChange={(date: Date[]) => console.log(date)}
          testId='input-date'
        />
      </Modal>
    </WrapperTheme>
  );
};

describe('Input Date component', () => {
  it('should works', () => {
    mount(
      <WrapperTheme>
        <InputDate
          placeHolder='DD / MM / YYYY hh:mm'
          disabled
          testId='input-date'
        />
      </WrapperTheme>
    );
  });

  it('should display the selected date', () => {
    const selectDate = '12/12/2020';

    mount(
      <WrapperTheme>
        <InputDate
          placeHolder='DD / MM / YYYY hh:mm'
          value={selectDate}
          testId='input-date'
        />
      </WrapperTheme>
    );

    cy.get('[data-test="input-date"]').should('have.value', selectDate);

    cy.get('[data-test="input-date"]').click();
    cy.get('.selected').should('contain', '12');
  });

  it('should deactivate the input', () => {
    mount(
      <WrapperTheme>
        <InputDate
          placeHolder='DD / MM / YYYY hh:mm'
          disabled
          testId='input-date'
        />
      </WrapperTheme>
    );

    cy.get('[data-test="input-date"]').should('be.disabled');
  });

  it('should show the required label', () => {
    mount(
      <WrapperTheme>
        <InputDate label='This is a label' required />
      </WrapperTheme>
    );

    cy.get('label').should('contain', '*');
  });

  it('should works in a modal', () => {
    mount(<TestComponent />);

    cy.get('[data-test="input-date"]').click();
    cy.wait(300);
    cy.get('.flatpickr-day.today').last().click();

    cy.get('[data-test="input-date"]').should('have.attr', 'value');
  });
});
