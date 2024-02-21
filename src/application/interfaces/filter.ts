export interface ITableDataFilter<T> {
  execute(data: T[], filters: Partial<T>): T[];
}

