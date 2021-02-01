import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { JoinbleThemeProvider } from '../../providers';
import { Dropdown } from './Dropdown';
import { DropdownOption } from './model';

const optionsDropdown: DropdownOption[] = [
  { name: 'test', value: 1 },
  { name: 'test2', value: 2 }
];

describe('Dropdown component', () => {
  it('Should be works', () => {
    mount(
      <JoinbleThemeProvider>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          placeholder='Select option'
        />
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
    cy.get('[data-test="dropdown-item-test"]').click();
    cy.get('[data-test="dropdown"]').contains('test').should('be.visible');
  });

  it('Default value should be visible', () => {
    mount(
      <JoinbleThemeProvider>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          value={1}
        />
      </JoinbleThemeProvider>
    );
    cy.get('[data-test="dropdown"]').contains('test').should('be.visible');
  });

  it('Should be disabled', () => {
    mount(
      <JoinbleThemeProvider>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          disabled
        />
      </JoinbleThemeProvider>
    );
    cy.get('[data-test="dropdown"]').should('have.attr', 'disabled');
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
