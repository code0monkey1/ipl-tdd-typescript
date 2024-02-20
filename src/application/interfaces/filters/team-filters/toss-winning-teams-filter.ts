import { Match } from "../../../../domain/entities/Match";

export interface ITossWinningTeamsFilter{
  execute(matches:Match[]):string[]
}


export class TossWinningTeams implements ITossWinningTeamsFilter{
  execute(matches: Match[]): string[] {
    
    const teams = new Set<string>()

    matches.forEach( m =>  teams.add(m.getTossWinner().toLowerCase()) )

    return [...teams]

  }
  
}