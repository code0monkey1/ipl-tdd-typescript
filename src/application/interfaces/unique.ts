export interface UniqueValuesExtractor<T> {
  execute(data: T[], attribute: keyof T): T[keyof T][];
}
