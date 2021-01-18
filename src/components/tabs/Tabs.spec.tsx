import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Tabs } from './Tabs';
import { TabPanel } from './TabPanel';

import { JoinbleThemeProvider } from '../../providers';

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

describe('Tab Component', () => {
  it('works', () => {
    mount(
      <WrapperTheme>
        <Tabs active='1'>
          <TabPanel name='Tab1' id='1'>
            Hello Tab 1
          </TabPanel>
          <TabPanel name='Tab2' id='2'>
            Hello Tab 2
          </TabPanel>
          <div>Three</div>
        </Tabs>
      </WrapperTheme>
    );
  });
});
