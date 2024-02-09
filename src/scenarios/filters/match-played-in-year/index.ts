import { IFilter } from "../../../data/interfaces/filters";
import { Match } from "../../../entities/Match";

export class MatchPlayedInYear implements IFilter{
  
  constructor(private match:Match,private filterYear:string){}
  isValid(): boolean {
     return this.match.getYear()==this.filterYear
  }



}