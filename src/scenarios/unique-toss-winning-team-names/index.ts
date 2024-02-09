import { Match } from "../../entities/Match"

 export  class UniqueTossWinningTeamNames{

       getTeamNames( matches:Match[]):Set<string>{
        
          const tossWinningTeamNames = new Set<string>
          
          for(let match of matches){
            
             if(!tossWinningTeamNames.has(match.getTossWinner()))
                   tossWinningTeamNames.add(match.getTossWinner())
          }
         
         return tossWinningTeamNames
       }
           
  }
