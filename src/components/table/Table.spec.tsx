import React, { useState, useEffect, useMemo } from 'react';
import { mount } from 'cypress-react-unit-test';
import { TablePortal } from './Table';
import { WrapperTheme } from '../../utils/test';
import { THeader } from './model';

const TableTestComponent = () => {
  const tableHeaders: THeader[] = [
    { value: 'Title' },
    { value: 'Description', options: { isSmall: true } },
    { value: 'Info', options: { isMedium: true } },
    { value: 'Notify me', options: { toggle: true, toggleKey: 'active' } }
  ];

  const [items, setItems] = useState<any>([]);

  const generateItems = (length: number = 5) => {
    const newItems = [];

    for (let i = 0; i < length; i++) {
      newItems.push({
        title: 'Example',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
        info:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        id: i++,
        active: 'active'
      });
    }

    setItems(newItems);
  };

  useEffect(() => {
    generateItems();
  }, []);

  const tableData: any = useMemo(
    () =>
      items.map((item: any) => ({
        values: [item.title, item.content, item.info, item.active],
        id: item.id
      })),
    [items]
  );

  return (
    <WrapperTheme>
      <TablePortal
        headers={tableHeaders}
        data={tableData}
        height={400}
        hasCheckBox
      />
    </WrapperTheme>
  );
};

describe('Table component', () => {
  it('should work', () => {
    mount(<TableTestComponent />);
  });
});
