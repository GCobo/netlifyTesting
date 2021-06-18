import React from 'react';

import { Collapsable } from './Collapsable';
import { CollabsableItem } from './CollapsableItem';

export default {
  title: 'Components/Collapsable',
  component: Collapsable,
  argTypes: {}
};

export const Base = (args: any) => {
  return (
    <Collapsable {...args}>
      <CollabsableItem title='Pages'>
        <p>Example</p>
      </CollabsableItem>
      <CollabsableItem title='Widgets'>
        <p>Example</p>
      </CollabsableItem>
    </Collapsable>
  );
};
