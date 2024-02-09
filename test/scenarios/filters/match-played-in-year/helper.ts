import { Match, TMatchProps } from "../../../../src/entities/Match";
import { MatchPlayedInYear } from '../../../../src/scenarios/filters/match-played-in-year/index';

export const createMatch=(partialMatchProps:Partial<TMatchProps>)=>{
   
      const matchProps:TMatchProps={
      matchId: "",
      season: "",
      city: "",
      date: "",
      team1: "",
      team2: "",
      tossWinner: "",
      tossDecision: "",
      result: "",
      winner: "",
      ...partialMatchProps
    }

   
  return new Match(matchProps)

}

export const createFilterMatchByYear =(match:Match,filterYear:string)=>{

     return new MatchPlayedInYear(match,filterYear)
}