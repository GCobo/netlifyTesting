/// <reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import { InputEditor } from './InputEditor';
import { WrapperTheme } from '../../utils/test';

describe('Input Editor component', () => {
  it('works', () => {
    mount(
      <WrapperTheme>
        <InputEditor label='Input with text editor' placeholder='Enter label' />
      </WrapperTheme>
    );
  });

  it('should have errorLabel', () => {
    mount(
      <WrapperTheme>
        <InputEditor
          label='Input with text editor'
          errorLabel='This field is required'
        />
      </WrapperTheme>
    );

    cy.contains('This field is required').should('be.visible');
  });

  it('should have helpLabel', () => {
    mount(
      <WrapperTheme>
        <InputEditor
          label='Input with text editor'
          helpLabel='This is the help'
        />
      </WrapperTheme>
    );

    cy.contains('This is the help').should('be.visible');
  });
});
