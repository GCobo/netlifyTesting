/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { DatePicker } from './DatePicker';
import { WrapperTheme } from '../../utils/test';

describe('Date Picker component', () => {
  it('should works', () => {
    mount(
      <WrapperTheme>
        <div style={{ width: '400px', height: '400px' }}>
          <DatePicker selectedDates={[new Date()]} />
        </div>
      </WrapperTheme>
    );

    cy.get('.day-with-event').should('be.exist');
  });
});
