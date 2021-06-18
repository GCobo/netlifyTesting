import { mount } from 'cypress-react-unit-test';
import React, { useState } from 'react';

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

  it('Item2 should be open', () => {
    mount(
      <WrapperTheme>
        <Collapsable>
          <CollabsableItem title='Pages' testId='pages'>
            Example
          </CollabsableItem>
          <CollabsableItem title='Widgets' testId='widgets'>
            Example
          </CollabsableItem>
          <CollabsableItem title='Themes' testId='themes' itemIsOpened>
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
    cy.get('[data-test="collapsable-widgets"]').should(
      'have.attr',
      'aria-expanded',
      'false'
    );
    cy.get('[data-test="collapsable-themes"]').should(
      'have.attr',
      'aria-expanded',
      'true'
    );
  });

  it.only('External onclick should be working', () => {
    const TestComponent = () => {
      const [selected, setSelected] = useState<number[]>([]);

      const handleSelected = (value: number[]) => {
        setSelected(value);
      };

      const optionsCollapsable = [
        { title: 'Pages', testId: 'pages', children: <p>example tab 1</p> },
        { title: 'Widgets', testId: 'widgets', children: <p>example tab 2</p> }
      ];
      console.log(selected);

      return (
        <>
          <button onClick={() => handleSelected([0])} data-test='button-tab-1'>
            open tab 1
          </button>
          <button onClick={() => handleSelected([1])} data-test='button-tab-2'>
            open tab 2
          </button>

          <WrapperTheme>
            <Collapsable>
              {optionsCollapsable.map((option: any, index: number) => (
                <CollabsableItem
                  title={option.title}
                  testId={option.testId}
                  itemIsOpened={selected.includes(index)}
                >
                  {option.children}
                </CollabsableItem>
              ))}
            </Collapsable>
          </WrapperTheme>
        </>
      );
    };
    mount(<TestComponent />);

    cy.get('[data-test="button-tab-1"]')
      .click()
      .get('[data-test="collapsable-pages"]')
      .should('have.attr', 'aria-expanded', 'true');
    // .get('[data-test="collapsable-widgets"]')
    // .should('have.attr', 'aria-expanded', 'false');

    cy.get('[data-test="button-tab-2"]')
      .click()
      .get('[data-test="collapsable-pages"]')
      .should('have.attr', 'aria-expanded', 'false')
      .get('[data-test="collapsable-widgets"]')
      .should('have.attr', 'aria-expanded', 'true');
  });
});
