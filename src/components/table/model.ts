export type TData = {
  values: any[];
  id: number | string;
  testId?: number | string;
};

export type TOptions = {
  isLarge?: boolean;
  isSmall?: boolean;
  isMedium?: boolean;
  isBold?: boolean;
  isCenter?: boolean;
  toggle?: boolean;
  toggleKey?: string;
  progress?: boolean;
  onClickCell?(
    rowId: string | number,
    cellValue: any,
    headerName: string
  ): void;
  truncateAt?: number;
  date?: boolean;
};

export type THeader = {
  value: string;
  key?: string;
  options?: TOptions;
};

export type TPagination = {
  useWindow?: boolean;
  hasMore: boolean;
  loadMore(): void;
  initialLoad?: boolean;
};

export type TChange = {
  id: string | number;
  name?: string;
  value: any;
};
