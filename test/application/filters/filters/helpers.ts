
import { Match, MatchProps, Result, TossDecision } from "../../../../src/domain/entities/Match"

export const createMatchWith=(props:Partial<MatchProps>)=>{
   
    const matchProps:MatchProps={
          matchId: 1,
          season: 1,
          city: 'some_city',
          date: new Date(),
          team1: 'some_team_a',
          team2: 'some_team_b',
          tossWinner: 'some_toss_winning_team',
          tossDecision: TossDecision.FIELD,
          result: Result.NORMAL,
          winner: 'some_winning_team',
          ...props
        }
    return new Match(matchProps)

}