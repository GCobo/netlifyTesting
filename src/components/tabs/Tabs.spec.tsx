import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Tabs } from './Tabs';
import { TabPanel } from './TabPanel';

import { ThemeIcon } from '../icons';
import { WrapperTheme } from '../../utils/test';

describe('Tab Component', () => {
  it('Should be works', () => {
    mount(
      <WrapperTheme>
        <Tabs active='1' testId='tabs'>
          <TabPanel name='Tab1' id='1' testIdTab='tab-1'>
            Hello Tab 1
          </TabPanel>
          <TabPanel name='Tab2' id='2'>
            Hello Tab 2
          </TabPanel>
        </Tabs>
      </WrapperTheme>
    );
    cy.get('[data-test="tabs"] [data-test="tab-1"]').should('be.visible');
  });
  it('Should be disabed', () => {
    mount(
      <WrapperTheme>
        <Tabs active='1'>
          <TabPanel name='Tab1' id='1' testIdTab='tab-1' disabled>
            Hello Tab 1
          </TabPanel>
          <TabPanel name='Tab2' id='2'>
            Hello Tab 2
          </TabPanel>
        </Tabs>
      </WrapperTheme>
    );
    cy.get('[data-test="tab-1"]').should('have.attr', 'disabled');
  });
  it('Should have icon', () => {
    mount(
      <WrapperTheme>
        <Tabs active='1'>
          <TabPanel name='Tab1' id='1' testIdTab='tab-1' icon={<ThemeIcon />}>
            Hello Tab 1
          </TabPanel>
          <TabPanel name='Tab2' id='2'>
            Hello Tab 2
          </TabPanel>
        </Tabs>
      </WrapperTheme>
    );
    cy.get('[data-test="tab-1"] svg').should('be.visible');
  });
  it('Should be clicked on tab2', () => {
    mount(
      <WrapperTheme>
        <Tabs active='1'>
          <TabPanel name='Tab1' id='1' testIdTab='tab-1' icon={<ThemeIcon />}>
            Hello Tab 1
          </TabPanel>
          <TabPanel
            name='Tab2'
            id='2'
            testIdTab='tab-2'
            testIdPanel='tab-2-panel'
          >
            Hello Tab 2
          </TabPanel>
        </Tabs>
      </WrapperTheme>
    );
    cy.get('[data-test="tab-2"]').click();
    cy.get('[data-test="tab-2-panel"]')
      .contains('Hello Tab 2')
      .should('be.visible');
  });

  it('should change active to tab2', () => {
    mount(
      <WrapperTheme>
        <Tabs active='2'>
          <TabPanel name='Tab1' id='1' testIdTab='tab-1' icon={<ThemeIcon />}>
            Hello Tab 1
          </TabPanel>
          <TabPanel name='Tab2' id='2' testIdPanel='tab-2-panel'>
            Hello Tab 2
          </TabPanel>
        </Tabs>
      </WrapperTheme>
    );

    cy.wait(300);

    cy.get('[data-test="tab-2-panel"]')
      .contains('Hello Tab 2')
      .should('be.visible');
  });

  it('TabPanel should have another styles', () => {
    mount(
      <WrapperTheme>
        <Tabs active='1'>
          <TabPanel
            name='Tab1'
            id='1'
            className='test-tabPanel-1'
            testIdPanel='tab-1-panel'
          >
            <p>Hello Tab 1</p>
          </TabPanel>
          <TabPanel name='Tab2' id='2' testIdPanel='tab-2-panel'>
            Hello Tab 2
          </TabPanel>
        </Tabs>
      </WrapperTheme>
    );

    cy.wait(300);
    cy.get('[data-test="tab-1-panel"]')
      .invoke('attr', 'class')
      .should('contain', 'test-tabPanel-1');
  });
});
