import React, { ReactElement } from 'react';

type TabPanelProps = {
  children: React.ReactNode;
  name: string;
  icon?: ReactElement;
  id?: string;
  disabled?: boolean;
  testIdTab?: string;
  testIdPanel?: string;
};

const TabPanel = ({ children, testIdPanel }: TabPanelProps) => {
  return <div data-test={testIdPanel}>{children}</div>;
};

TabPanel.displayName = 'TabPanel';

export { TabPanel };
