import { UniqueValuesExtractor } from "../../interfaces/unique";
import { Match } from "../../types";

export class UniqueMatchAttributeValues implements UniqueValuesExtractor<Match> {
  constructor() {}
  execute(data: Match[], attribute: keyof Match): Match[keyof Match][] {
    const uniqueValues = [...new Set(data.map(item => item[attribute]))];
    return uniqueValues;
  }
}
