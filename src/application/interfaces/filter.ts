export interface ITableDataFilter<T> {
  
  execute(data:T[]): T[];
}

