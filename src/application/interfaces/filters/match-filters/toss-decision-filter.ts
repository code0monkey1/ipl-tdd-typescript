import { Match, TossDecision } from "../../../../domain/entities/Match";
import { IFilter } from "../filter";

export class TossDecisionFilter implements IFilter<Match>{

  constructor(private tossDecision:TossDecision){}

  execute(data: Match[]): Match[] {
    return data.filter( m => m.getTossDecision()===this.tossDecision)
  }
  
}