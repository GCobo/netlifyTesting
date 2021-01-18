import React, { ReactElement } from 'react';

type TabPanelProps = {
  children: React.ReactNode;
  name: string;
  icon?: ReactElement;
  id?: string;
  disabled?: boolean;
};

const TabPanel = ({ children }: TabPanelProps) => {
  return <div>{children}</div>;
};

TabPanel.displayName = 'TabPanel';

export { TabPanel };
