import React, { Children, useEffect, useState } from 'react';

import { TabPanel } from './TabPanel';
import { TabBar, TabPanelContent, TabsStyle, TabWrapper } from './styles';

type TabsProps = {
  children: React.ReactElement[];
  active?: string;
  onChangeActive?(active: string): void;
  className?: string;
  testId?: string;
};

export const Tabs = ({
  children,
  active = '1',
  onChangeActive,
  className,
  testId
}: TabsProps) => {
  const [selected, setSelected] = useState<string>(active);

  useEffect(() => {
    onChangeActive && active && onChangeActive(active);
  }, [active]);

  return (
    <div>
      <TabWrapper className={className} data-test={testId}>
        {Children.map(
          children,
          (child: React.ReactElement) =>
            child.type === TabPanel && (
              <li role='tab' key={child.props.key}>
                <TabsStyle
                  data-test={child.props.testIdTab}
                  disabled={child.props.disabled}
                  active={child.props.id === selected}
                  onClick={() => setSelected(child.props.id)}
                >
                  {child.props.icon}
                  {child.props.name}
                </TabsStyle>
              </li>
            )
        )}
        <TabBar style={{ left: parseInt(selected) * 100 - 100 }} />
      </TabWrapper>

      {Children.map(children, (child: React.ReactElement) => {
        return child.type === TabPanel && selected === child.props.id ? (
          <TabPanelContent role='tabpanel'>{child}</TabPanelContent>
        ) : null;
      })}
    </div>
  );
};
