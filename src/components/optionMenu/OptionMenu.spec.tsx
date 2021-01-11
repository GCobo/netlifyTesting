import React from 'react';
import { OptionMenu } from './OptionMenu';
import { OptionMenuItem } from './OptionMenuItem';
import { mount } from 'cypress-react-unit-test';
import { JoinbleThemeProvider } from '../../providers';
import { SearchIcon } from '../icons';
import { PositionMode } from '../portal';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';

describe('Option Menu component', () => {
  it('Click icon works', () => {
    mount(
      <JoinbleThemeProvider>
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
        >
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
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
        >
          <OptionMenuItem href='www.joinble.com'>List test</OptionMenuItem>
        </OptionMenu>
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.get('a[href*="www.joinble.com"]').should('be.visible');
  });

  it('should be placed to the right of the icon', () => {
    mount(
      <JoinbleThemeProvider>
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
          position={PositionMode.right}
        >
          <OptionMenuItem>List test</OptionMenuItem>
        </OptionMenu>
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.get('#popup-root').find('div').should('have.css', 'right');
  });

  it('should have an item activated', () => {
    mount(
      <JoinbleThemeProvider>
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
          position={PositionMode.right}
        >
          <OptionMenuItem active>List test</OptionMenuItem>
        </OptionMenu>
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.get('[aria-selected="true"]').should('be.exist');
  });
});
