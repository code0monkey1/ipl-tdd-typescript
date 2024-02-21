export interface ITableDataFilter<T> {
  filterEntries(data: T[], filters: Partial<T>): T[];
}

