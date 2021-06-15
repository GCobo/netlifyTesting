import React, { useEffect, useState } from 'react';
import { mount } from 'cypress-react-unit-test';
import styled from '@emotion/styled';
import { Dropdown } from './Dropdown';
import { Portal } from '../portal/Portal';
import { DropdownOption } from './model';
import { WrapperTheme } from '../../utils/test';

const optionsDropdown: DropdownOption[] = [
  { name: 'test', value: 1 },
  { name: 'test2', value: 2 }
];

describe('Dropdown component', () => {
  it('Should be works', () => {
    mount(
      <WrapperTheme>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          placeholder='Select option'
        />
      </WrapperTheme>
    );
    cy.get('[data-test="dropdown"]').click();
    cy.get('[data-test="dropdown-menu"]').should('be.visible');
  });

  it('Value should be change onclick', () => {
    mount(
      <WrapperTheme>
        <Dropdown label='label' options={optionsDropdown} testId='dropdown' />
      </WrapperTheme>
    );
    cy.get('[data-test="dropdown"]').click();
    cy.get('[data-test="dropdown-item-test"]').click();
    cy.get('input').should('have.value', '1');
    cy.get('[data-test="dropdown"]').contains('test').should('be.visible');
  });

  it('Value should be deleted', () => {
    mount(
      <WrapperTheme>
        <Dropdown label='label' options={optionsDropdown} testId='dropdown' />
      </WrapperTheme>
    );
    cy.get('[data-test="dropdown"]')
      .click()
      .get('[data-test="dropdown-item-test"]')
      .click()
      .get('[data-test="dropdown-delete-value"]')
      .click()
      .get('[data-test="dropdown"]')
      .should('have.value', '');
  });

  it('Default value should be visible', () => {
    mount(
      <WrapperTheme>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          value={1}
        />
      </WrapperTheme>
    );
    cy.get('[data-test="dropdown"]').contains('test').should('be.visible');
  });

  it('Should be disabled', () => {
    mount(
      <WrapperTheme>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          disabled
        />
      </WrapperTheme>
    );
    cy.get('[data-test="dropdown"]').should('have.attr', 'disabled');
  });

  it('Error label should be visible', () => {
    mount(
      <WrapperTheme>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          errorLabel='Error label testing'
        />
      </WrapperTheme>
    );
    cy.contains('Error label testing').should('be.visible');
  });

  it('Help label should be visible', () => {
    mount(
      <WrapperTheme>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          helpLabel='Help label testing'
        />
      </WrapperTheme>
    );
    cy.contains('Help label testing').should('be.visible');
  });

  it('should be able to select multiple options', () => {
    const TestComponent = () => {
      const optionsDropdown: DropdownOption[] = [
        { name: 'test1', value: 1 },
        { name: 'test2', value: 2 },
        { name: 'test3', value: 3 },
        { name: 'test4', value: 4 }
      ];

      return (
        <WrapperTheme>
          <Dropdown
            label='label'
            options={optionsDropdown}
            testId='dropdown'
            helpLabel='Help label testing'
            placeholder='Select various items'
            multiple
          />
        </WrapperTheme>
      );
    };

    mount(<TestComponent />);

    cy.get('[data-test="dropdown"]').click();
    cy.get('[data-test="dropdown-item-test1"]').click();
    cy.get('[data-test="dropdown-item-test2"]').click();

    cy.contains('test1, test2').should('be.visible');
  });

  it('should open dropdown in modal with height 0', () => {
    const PortalStyled = styled.div<{ hidden?: boolean }>`
      width: 500px;
      margin-left: 500px;
      height: ${(props) => (props.hidden ? 0 : 'auto')};
    `;
    const TestComponent = () => {
      const [hidden, setHidden] = useState(true);

      useEffect(() => {
        setTimeout(() => setHidden(false), 100);
      }, []);

      const optionsDropdown: DropdownOption[] = [
        { name: 'test1', value: 1 },
        { name: 'test2', value: 2 },
        { name: 'test3', value: 3 },
        { name: 'test4', value: 4 }
      ];

      return (
        <WrapperTheme>
          <Portal overlay={true} show={true}>
            <PortalStyled hidden={hidden}>
              <Dropdown
                label='label'
                options={optionsDropdown}
                testId='dropdown'
                helpLabel='Help label testing'
                placeholder='Select various items'
                multiple
              />
            </PortalStyled>
          </Portal>
        </WrapperTheme>
      );
    };

    mount(<TestComponent />);

    cy.wait(100);

    cy.get('[data-test="dropdown"]').click();

    cy.get('[data-test="dropdown-item-test1"]').click();

    cy.contains('test1').should('be.visible');
  });

  it('should receive multiple values', () => {
    const TestComponent = () => {
      const optionsDropdown: DropdownOption[] = [
        { name: 'test1', value: 1 },
        { name: 'test2', value: 2 },
        { name: 'test3', value: 3 },
        { name: 'test4', value: 4 }
      ];

      return (
        <WrapperTheme>
          <Dropdown
            label='label'
            options={optionsDropdown}
            testId='dropdown'
            helpLabel='Help label testing'
            placeholder='Select various items'
            multiple
            value={[1, 2]}
            overlay
          />
        </WrapperTheme>
      );
    };

    mount(<TestComponent />);
    cy.contains('test1, test2').should('be.visible');
  });

  it('Dropdown multiple values should be deleted', () => {
    mount(
      <WrapperTheme>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          multiple
        />
      </WrapperTheme>
    );
    cy.get('[data-test="dropdown"]')
      .click()
      .get('[data-test="dropdown-item-test"]')
      .click()
      .get('[data-test="dropdown-item-test2"]')
      .click()
      .get('[data-test="dropdown-delete-value"]')
      .click()
      .get('[data-test="dropdown"]')
      .should('have.value', '');
  });

  it('Dropdown multiple values should be deleted', () => {
    mount(
      <WrapperTheme>
        <Dropdown
          label='label'
          options={optionsDropdown}
          testId='dropdown'
          multiple
        />
      </WrapperTheme>
    );
    cy.get('[data-test="dropdown"]')
      .click()
      .get('[data-test="dropdown-item-test"]')
      .click()
      .get('[data-test="dropdown-item-test2"]')
      .click()
      .get('[data-test="dropdown-delete-value"]')
      .click()
      .get('[data-test="dropdown"]')
      .should('have.value', '');
  });

  it('should show the required label', () => {
    mount(
      <WrapperTheme>
        <Dropdown options={[]} label='This is a label' required />
      </WrapperTheme>
    );

    cy.get('label').should('contain', '*');
  });

  it('should allow custom input to be added', () => {
    const options: DropdownOption[] = [
      {
        name: 'Weekdays',
        value: 'weekdays'
      },
      {
        name: 'Weekends',
        value: 'weekends'
      },
      {
        name: 'Every Monday',
        value: 'monday'
      }
    ];

    mount(
      <WrapperTheme>
        <Dropdown
          options={options}
          label='Date Range'
          placeholder='Select date Range'
          testId='dropdown'
          required
          input={{ label: 'Specific date', type: 'date', testId: 'input-date' }}
        />
      </WrapperTheme>
    );

    cy.get('[data-test="dropdown"]').click();

    cy.get('[data-test="input-date"]').should('be.visible');

    cy.get('[data-test="input-date"]').type('2020-12-12');

    cy.contains('2020-12-12').should('be.visible');
  });
});
