import { UniqueValuesExtractor } from "../../interfaces/unique";
import { Match } from "../../types";

export class UniqueMatchAttributeValues implements UniqueValuesExtractor<Match> {
  constructor() {}
  execute<K extends keyof Match>(data: Match[], attribute: K): Match[K][] {
    const uniqueValues = [...new Set(data.map(item => item[attribute]))];
    return uniqueValues;
  }
}
