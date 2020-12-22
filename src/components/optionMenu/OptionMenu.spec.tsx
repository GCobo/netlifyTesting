import React from 'react';
import { OptionMenu } from './OptionMenu';
import { OptionMenuItem } from './OptionMenuItem';
import { mount } from 'cypress-react-unit-test';
import { JoinbleThemeProvider } from '../../providers';
import { SearchIcon } from '../icons';
import { PositionMode } from '../portal';
import { FlexCenter } from '../checkbox/CheckboxStyles';

describe('Option Menu component', () => {
  it('Click icon works', () => {
    mount(
      <JoinbleThemeProvider>
        <OptionMenu icon={<SearchIcon />} testId='button-option-menu'>
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
        <OptionMenu icon={<SearchIcon />} testId='button-option-menu'>
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
        <div
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <OptionMenu
            icon={<SearchIcon />}
            testId='button-option-menu'
            position={PositionMode.right}
          >
            <OptionMenuItem>List test</OptionMenuItem>
          </OptionMenu>
        </div>
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-option-menu"]').click();

    cy.get('#popup-root').find('div').should('have.css', 'right');
  });
});
