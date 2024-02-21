import { TableData } from "../uniques/uniques";

export interface IFilter<F,T>{
  execute(filters:F):T[]
}

interface ITableDataFilter<T> {
  filterEntries(data: T[], filters: Partial<T>): T[];
}

export class TableDataFilter implements ITableDataFilter<TableData> {
  filterEntries(data: TableData[], filters: Partial<TableData>): TableData[] {
    return data.filter(entry => {
      return Object.entries(filters).every(([key, value]) => entry[key as keyof TableData] === value);
    });
  }
}
