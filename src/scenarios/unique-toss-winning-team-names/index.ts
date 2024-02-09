import { Match } from "../../entities/Match";

export interface IUniqueTossWinningTeams{
  getNames(matches:Match[]):Set<string>
}
 export  class UniqueTossWinningTeams implements IUniqueTossWinningTeams{

       getNames( matches:Match[]):Set<string>{
        
          const tossWinningTeamNames = new Set<string>
          
          for(let match of matches){
            
             if(!tossWinningTeamNames.has(match.getTossWinner()))
                   tossWinningTeamNames.add(match.getTossWinner())
          }
         
         return tossWinningTeamNames
       }
           
  }
