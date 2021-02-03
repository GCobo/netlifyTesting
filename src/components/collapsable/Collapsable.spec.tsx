import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { WrapperTheme } from '../../utils/test';
import { Collapsable } from './Collapsable';
import { CollabsableItem } from './CollapsableItem';

describe('Collapsable Component', () => {
  it('Should be works', () => {
    mount(
      <WrapperTheme>
        <Collapsable>
          <CollabsableItem title='Pages'>Example</CollabsableItem>
          <CollabsableItem title='Widgets'>Example</CollabsableItem>
        </Collapsable>
      </WrapperTheme>
    );
  });

  it('All items should be displayed', () => {
    mount(
      <WrapperTheme>
        <Collapsable allOpen>
          <CollabsableItem title='Pages' testId='pages'>
            Example
          </CollabsableItem>
          <CollabsableItem title='Widgets' testId='widgets'>
            Example
          </CollabsableItem>
          <CollabsableItem title='Themes' testId='themes'>
            Example
          </CollabsableItem>
        </Collapsable>
      </WrapperTheme>
    );

    cy.get('[data-test="collapsable-pages"]').should(
      'have.attr',
      'aria-expanded',
      'true'
    );

    cy.get('[data-test="collapsable-widgets"]').should(
      'have.attr',
      'aria-expanded',
      'true'
    );

    cy.get('[data-test="collapsable-themes"]').should(
      'have.attr',
      'aria-expanded',
      'true'
    );
  });

  it('should click on one of the items and expand', () => {
    mount(
      <WrapperTheme>
        <Collapsable>
          <CollabsableItem title='Pages' testId='pages'>
            Example
          </CollabsableItem>
          <CollabsableItem title='Widgets' testId='widgets'>
            Example
          </CollabsableItem>
          <CollabsableItem title='Themes' testId='themes'>
            Example
          </CollabsableItem>
        </Collapsable>
      </WrapperTheme>
    );

    cy.get('[data-test="collapsable-pages"]').should(
      'have.attr',
      'aria-expanded',
      'false'
    );

    cy.get('[data-test="collapsable-item-pages"]').click();

    cy.get('[data-test="collapsable-pages"]').should(
      'have.attr',
      'aria-expanded',
      'true'
    );
  });
});
