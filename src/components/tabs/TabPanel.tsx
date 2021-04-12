import React, { ReactElement } from 'react';

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
    <div data-test={testIdPanel} className={className}>
      {children}
    </div>
  );
};

TabPanel.displayName = 'TabPanel';

export { TabPanel };
