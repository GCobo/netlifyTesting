import React from 'react';
import { OptionMenu } from './OptionMenu';
import { OptionMenuItem } from './OptionMenuItem';
import { mount } from 'cypress-react-unit-test';
import { JoinbleThemeProvider } from '../../providers';
import { SearchIcon } from '../icons';

describe('Option Menu component', () => {
  it('Click icon works', () => {
    mount(
      <JoinbleThemeProvider>
        <OptionMenu icon={<SearchIcon />}>
          <OptionMenuItem>List test</OptionMenuItem>
        </OptionMenu>
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.contains('List test').should('be.visible');
  });

  it('Should navigate', () => {
    mount(
      <JoinbleThemeProvider>
        <OptionMenu icon={<SearchIcon />}>
          <OptionMenuItem href='www.joinble.com'>List test</OptionMenuItem>
        </OptionMenu>
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.get('a[href*="www.joinble.com"]').should('be.visible');
  });
});
