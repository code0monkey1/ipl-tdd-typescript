export interface UniqueValuesExtractor<T> {
  getUniqueValues<K extends keyof T>(data: T[], attribute: K): T[K][];
}


