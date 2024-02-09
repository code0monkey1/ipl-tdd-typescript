import { IFilter } from "../../../data/interfaces";
import { Match } from "../../../entities/Match";

export class MatchTeamFieldsAfterWinningToss implements IFilter{

  constructor(private match:Match){}
  isValid(): boolean {
    return this.match.getTossDecision()==='field'
  }
  
}
