import React, { useState, useEffect, useMemo } from 'react';
import { mount } from 'cypress-react-unit-test';
import { TablePortal } from './Table';
import { WrapperTheme } from '../../utils/test';
import { THeader } from './model';

const TableTestComponent = () => {
  const tableHeaders: THeader[] = [
    { value: 'Title', options: {} },
    { value: 'Description', options: { isSmall: true } },
    { value: 'Notify me', options: { toggle: true, toggleKey: 'active' } }
  ];

  const [items, setItems] = useState<any>([]);

  const generateItems = (length: number = 100) => {
    const newItems = [];

    for (let i = 0; i < length; i++) {
      newItems.push({
        title: 'Example',
        content: 'Example',
        id: i++,
        active: false
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
        values: [item.title, item.content, item.active],
        id: item.id
      })),
    [items]
  );

  return (
    <WrapperTheme>
      <TablePortal headers={tableHeaders} data={tableData} height={400} />
    </WrapperTheme>
  );
};

describe('Table component', () => {
  it('should work', () => {
    mount(<TableTestComponent />);
  });
});
