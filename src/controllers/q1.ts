import { IRepo } from "../data/interfaces";
import { Match } from "../entities/Match";
import { And } from "../scenarios/filters/and";
import { MatchTeamFieldsAfterWinningToss } from "../scenarios/filters/fields-after-winning-toss";
import { MatchPlayedInYear } from "../scenarios/filters/match-played-in-year";
import { UniqueTossWinningTeams } from "../scenarios/unique-toss-winning-team-names";


export class TopNTeamsThatElectedToFieldFirstAfterWinningTossInYear{

          constructor(
            private matchesRepo:IRepo<Match>,
            private filterYear:string,
            private topN:number){
            
            const matches = this.matchesRepo.data

            // filter matches by year , and choose to field first
            const filteredMatches = matches.reduce((acc,match)=>{
               
                if(new And(
                    [
                      new MatchPlayedInYear(match,this.filterYear),
                      new MatchTeamFieldsAfterWinningToss(match)
                    ])){
                   acc.push(match)
                }
                return acc
              },[] as Match[])



            // get all unique team names that chose to field first
            // which will an array of names
            const uniqueNames = new UniqueTossWinningTeams()
              
            
            // among the names , choose the ones that have top n wins
                // which will be 
            
                

          }
  
}