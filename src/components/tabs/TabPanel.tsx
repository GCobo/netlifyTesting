import React, { ReactElement } from 'react';
import { TabPanelStyles } from './TabStyles';

type TabPanelProps = {
  children: React.ReactNode;
  name: string;
  icon?: ReactElement;
  id?: string;
  disabled?: boolean;
  testIdTab?: string;
  testIdPanel?: string;
  className?: string;
};

const TabPanel = ({ children, testIdPanel, className }: TabPanelProps) => {
  return (
    <TabPanelStyles data-test={testIdPanel} className={className}>
      {children}
    </TabPanelStyles>
  );
};

TabPanel.displayName = 'TabPanel';

export { TabPanel };
