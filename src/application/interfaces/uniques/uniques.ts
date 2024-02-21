export interface UniqueValuesExtractor<T> {
  getUniqueValues(data: T[], attribute: keyof T): T[keyof T][];
}
