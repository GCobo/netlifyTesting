import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { CheckPlatform, ICheckPlatform } from './CheckPlatform';
import { JoinbleThemeProvider } from '../../providers';
import { AndroidIcon, AppleIcon } from '../icons';

const options: ICheckPlatform[] = [
  {
    id: '121221',
    icon: <AndroidIcon />,
    name: 'Android'
  },
  {
    id: '121222',
    icon: <AppleIcon />,
    name: 'Apple'
  }
];

describe('Input Upload component', () => {
  it.only('should check checkbox android', () => {
    mount(
      <JoinbleThemeProvider>
        <CheckPlatform options={options} name='platforms' onChange={() => {}} />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="check-Android"]').click();

    cy.get(`input[id="${options[0].id}"]`).should(
      'have.attr',
      'aria-checked',
      'true'
    );
  });

  it('should check both elements', () => {
    mount(
      <JoinbleThemeProvider>
        <CheckPlatform options={options} name='platforms' onChange={() => {}} />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="check-Android"]').click();
    cy.get('[data-test="check-Apple"]').click();

    cy.get(`input[id="${options[0].id}"]`).should(
      'have.attr',
      'aria-checked',
      'true'
    );

    cy.get(`input[id="${options[1].id}"]`).should(
      'have.attr',
      'aria-checked',
      'true'
    );
  });

  it('should add one value by default', () => {
    mount(
      <JoinbleThemeProvider>
        <CheckPlatform
          options={options}
          name='platforms'
          value={['121222']}
          onChange={() => {}}
        />
      </JoinbleThemeProvider>
    );

    cy.get(`input[id="${options[1].id}"]`).should(
      'have.attr',
      'aria-checked',
      'true'
    );
  });
});
