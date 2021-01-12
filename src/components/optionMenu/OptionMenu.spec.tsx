import React from 'react';
import { OptionMenu } from './OptionMenu';
import { OptionMenuItem } from './OptionMenuItem';
import { mount } from 'cypress-react-unit-test';
import { JoinbleThemeProvider } from '../../providers';
import { SearchIcon } from '../icons';
import { PositionMode } from '../portal';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';

const WrapperTheme = ({ children }: any) => (
  <JoinbleThemeProvider>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '500px'
      }}
    >
      {children}
    </div>
  </JoinbleThemeProvider>
);

describe('Option Menu component', () => {
  it('Click icon works', () => {
    mount(
      <WrapperTheme>
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
        >
          <OptionMenuItem>List test</OptionMenuItem>
        </OptionMenu>
      </WrapperTheme>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.contains('List test').should('be.visible');
  });

  it('Should navigate', () => {
    mount(
      <WrapperTheme>
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
        >
          <OptionMenuItem href='www.joinble.com'>List test</OptionMenuItem>
        </OptionMenu>
      </WrapperTheme>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.get('a[href*="www.joinble.com"]').should('be.visible');
  });

  it('should be placed to the right of the icon', () => {
    mount(
      <WrapperTheme>
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
          position={PositionMode.right}
        >
          <OptionMenuItem>List test</OptionMenuItem>
        </OptionMenu>
      </WrapperTheme>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.get('#popup-root').find('div').should('have.css', 'right');
  });

  it('should have an item activated', () => {
    mount(
      <WrapperTheme>
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
          position={PositionMode.right}
        >
          <OptionMenuItem active>List test</OptionMenuItem>
        </OptionMenu>
      </WrapperTheme>
    );

    cy.get('[data-test="button-option-menu"]').click();
    cy.get('[aria-selected="true"]').should('be.exist');
  });

  it('should have an item disabled', () => {
    mount(
      <WrapperTheme>
        <OptionMenu
          testId='button-option-menu'
          renderItem={<ButtonIcon icon={<SearchIcon />} />}
          position={PositionMode.right}
        >
          <OptionMenuItem
            disabled
            testId='disabled-option'
            onClick={() => {
              console.log('onclick');
            }}
          >
            Example 1
          </OptionMenuItem>
          <OptionMenuItem>Example 2</OptionMenuItem>
        </OptionMenu>
      </WrapperTheme>
    );

    cy.get('[data-test="button-option-menu"]').click();

    cy.get('[data-test="disabled-option"]').should(
      'have.attr',
      'aria-disabled',
      'true'
    );
  });
});
