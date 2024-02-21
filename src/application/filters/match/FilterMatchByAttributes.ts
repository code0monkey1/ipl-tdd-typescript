import { ITableDataFilter } from "../../interfaces/filter";
import { Match } from "../../types";

export class FilterMatchByAttributes implements ITableDataFilter<Match> {

  constructor(private filters: Partial<Match>){}
  execute(data: Match[]): Match[] {
     return data.filter(entry => {
      return Object.entries(this.filters).every(([key, value]) => entry[key as keyof Match] === value);
    });
  }
  
  
}

