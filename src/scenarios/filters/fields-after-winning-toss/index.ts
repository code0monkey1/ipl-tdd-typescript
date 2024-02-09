import { IFilter } from "../../../data/interfaces/filters";
import { Match } from "../../../entities/Match";

export class TeamFieldsAfterWinningToss implements IFilter{

  constructor(private match:Match){}
  isValid(): boolean {
    return this.match.getTossDecision()==='field'
  }
  
}
