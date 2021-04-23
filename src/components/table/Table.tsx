import React, { useRef, useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { THeader, TPagination, TData, TChange } from './model';
import { TableStyles, TableHeaderStyles, TableList } from './Styles';
import { Checkbox } from '../checkbox/Checkbox';
import { TableItem } from './TableItem';

type IProps = {
  headers: THeader[];
  data: TData[];
  onEdit?(id: number | string): void;
  withPagination?: TPagination;
  headerFilter?: boolean;
  hasFilter?: boolean;
  hasCheckBox?: boolean;
  filtersOption?: any;
  testId?: string;
  searchText?: string;
  onChange?(data: TChange): void;
  onClickItem?(id: string | number): void;
  className?: string;
  withOutBottom?: boolean;
  height?: number;
  onToggle?(data: TChange): void;
  isTruncated?: boolean;
  onSelectedItemsChange?: (selectedItems: Array<string | number>) => void;
};

export const TablePortal = ({
  headers,
  data,
  hasCheckBox,
  withOutBottom = false,
  onEdit,
  searchText,
  withPagination = {
    useWindow: false,
    hasMore: false,
    loadMore: () => {}
  },
  testId,
  className,
  onChange,
  onToggle,
  onClickItem,
  height,
  onSelectedItemsChange
}: IProps) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [itemsSelect, setItemsSelect] = useState<Array<string | number>>([]);
  const [allItemsSelected, setAllItemsSelected] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<number | string | undefined>();
  const [heightTable, _] = useState(height ? `${height}px` : '100%');

  const customHeaders = headers.map((h: THeader) => ({ options: {}, ...h }));

  const [innerHeaders, setInnerHeader] = useState<THeader[]>(customHeaders);

  useEffect(() => {
    onSelectedItemsChange && onSelectedItemsChange(itemsSelect);
  }, [itemsSelect]);

  const onBlurHandle = () => {
    setIsEdit(undefined);
  };

  const onSelectItem = (id: string | number) => {
    setItemsSelect((items) =>
      items.includes(id)
        ? items.filter((item) => item !== id)
        : items.concat(id)
    );
  };

  const onSelectAll = () => {
    setAllItemsSelected((allItemsSelected) => !allItemsSelected);
    const ids = data.map((item: any) => item.id);
    setItemsSelect(allItemsSelected ? [] : ids);
  };

  const onClickItemHandle = (id: string | number) => {
    if (onClickItem) {
      setIsEdit(undefined);
      return onClickItem(id);
    }

    if (onEdit) {
      return onEdit(id);
    }
  };

  return (
    <>
      <TableStyles ref={tableRef} className={className} data-test={testId}>
        <TableHeaderStyles data-test={`${testId}-table-header`}>
          {hasCheckBox && <Checkbox value='1' onChange={onSelectAll} />}
          {innerHeaders.map((header: THeader) => {
            return (
              <span key={header.value} data-test={`header-${header.value}`}>
                {header.value}
              </span>
            );
          })}
        </TableHeaderStyles>
        <TableList>
          {data.length > 0 && (
            <Virtuoso
              style={{
                width: '100%',
                height: `calc(${heightTable} - ${
                  withOutBottom ? '0px' : '2.4rem'
                }`
              }}
              totalCount={data.length}
              endReached={() => {
                if (withPagination.hasMore) {
                  withPagination.loadMore();
                }
              }}
              itemContent={(index: number) => (
                <span
                  data-test={
                    data[index].testId
                      ? `table-element-${data[index].testId}`
                      : 'table-element'
                  }
                  key={data[index].id}
                >
                  {hasCheckBox && (
                    <div>
                      <Checkbox
                        value='checkbox'
                        checked={itemsSelect.includes(data[index].id)}
                        onChange={() => onSelectItem(data[index].id)}
                      />
                    </div>
                  )}
                  {data[index].values.map((item: any, i: number) => {
                    const options = innerHeaders[i].options;
                    return (
                      <TableItem
                        key={`row-${innerHeaders[i].value}-${index}`}
                        searchText={searchText}
                        name={innerHeaders[i].key}
                        item={item}
                        {...options}
                        testId={`row-${innerHeaders[i].value}`}
                        isEdit={isEdit === data[index].id}
                        onChange={(name: string, value: any) =>
                          onChange &&
                          onChange({ id: data[index].id, value, name })
                        }
                        onClick={
                          onClickItem
                            ? () => onClickItemHandle(data[index].id)
                            : undefined
                        }
                        onBlur={onBlurHandle}
                        onToggle={(name, value) =>
                          onToggle &&
                          onToggle({
                            id: data[index].id,
                            value,
                            name
                          })
                        }
                      />
                    );
                  })}
                </span>
              )}
            ></Virtuoso>
          )}
        </TableList>
      </TableStyles>
    </>
  );
};
