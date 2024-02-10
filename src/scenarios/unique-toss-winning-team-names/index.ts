import { Match } from "../../entities/Match";

export interface IUniqueTossWinningTeams{
  getNames(matches:Match[]):string[]
}
 export  class UniqueTossWinningTeams implements IUniqueTossWinningTeams{

       getNames( matches:Match[]):string[]{
        
          const tossWinningTeamNames = new Set<string>
          
          for(let match of matches){
            
             if(!tossWinningTeamNames.has(match.getTossWinner()))
                   tossWinningTeamNames.add(match.getTossWinner())
          }
         
         return Array.from(tossWinningTeamNames).map(teamName => teamName.toString());
       }
           
  }
