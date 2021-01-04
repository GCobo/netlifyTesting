import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { JoinbleThemeProvider } from '../../providers';
import { OptionMenuItemProps } from '../optionMenu/OptionMenuModel';
import { Dropdown } from './Dropdown';

const optionsDropdown: OptionMenuItemProps[] = [
  { children: 'test', id: 1 },
  { children: 'test2', id: 2 }
];

describe('Dropdown component', () => {
  it('Should be works', () => {
    mount(
      <JoinbleThemeProvider>
        <Dropdown label='label' options={optionsDropdown} testId='dropdown' />
      </JoinbleThemeProvider>
    );
    cy.get('[data-test="dropdown"]').click();
    cy.get('[data-test="dropdown-menu"]').should('be.visible');
  });

  it('Value should be change onclik', () => {
    mount(
      <JoinbleThemeProvider>
        <Dropdown label='label' options={optionsDropdown} testId='dropdown' />
      </JoinbleThemeProvider>
    );
    cy.get('[data-test="dropdown"]').click();
    cy.get('[data-test="dropdown-item-1"]').click();
    cy.get('[data-test="dropdown"]').contains('test').should('be.visible');
  });

  it('Default value should be visible', () => {
    mount(
      <JoinbleThemeProvider>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          value='Default testing'
        />
      </JoinbleThemeProvider>
    );
    cy.get('[data-test="dropdown"]')
      .contains('Default testing')
      .should('be.visible');
  });

  it('Error label should be visible', () => {
    mount(
      <JoinbleThemeProvider>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          errorLabel='Error label testing'
        />
      </JoinbleThemeProvider>
    );
    cy.contains('Error label testing').should('be.visible');
  });

  it('Help label should be visible', () => {
    mount(
      <JoinbleThemeProvider>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          helpLabel='Help label testing'
        />
      </JoinbleThemeProvider>
    );
    cy.contains('Help label testing').should('be.visible');
  });
});
