import { ITableDataFilter } from "../../interfaces/filter";
import { Match } from "../../types";

export class FilterMatchByAttributes implements ITableDataFilter<Match> {
   execute(data: Match[], filters: Partial<Match>): Match[] {
    return data.filter(entry => {
      return Object.entries(filters).every(([key, value]) => entry[key as keyof Match] === value);
    });
  }
}

