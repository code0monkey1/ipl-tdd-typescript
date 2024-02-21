import { ITableDataFilter } from "../interfaces/filters/filter";
import { Match } from "../types";


export class MatchFilter implements ITableDataFilter<Match> {
   filterEntries(data: Match[], filters: Partial<Match>): Match[] {
    return data.filter(entry => {
      return Object.entries(filters).every(([key, value]) => entry[key as keyof Match] === value);
    });
  }
}

