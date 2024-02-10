
import { IRepo } from "../data/interfaces";
import { Match } from "../entities/Match";
import { IFilter } from "../scenarios/filters/new";
import { IUniqueTossWinningTeams } from "../scenarios/unique-toss-winning-team-names";


export class TopTeamsUseCase{

          constructor(
            private matchesRepo:IRepo<Match>,
            private matchFilter:IFilter<Match>,
            private topNWiningTeams:TopNWinningTeams
            ){}

          execute(){
                
            const matches = this.matchesRepo.data

            // filter matches by year , and choose to field first
            const filteredMatches = this.matchFilter.filter(matches)

            return this.topNWiningTeams.execute(filteredMatches)
   
          }
  
}


export class TopNWinningTeams{

   constructor(
      private topN:number, 
      private uniqueTossWinningTeams:IUniqueTossWinningTeams,
      private mappedTeamWins :IMappedTeamWins,
      private sortedTeamWins:ISortedTeamWins,
      private topNTeamWins:ITopNTeamWins
      ){}

   execute(matches:Match[]):[string, number][]{

         const uniqueTeamNames  =  this.uniqueTossWinningTeams.getNames(matches)

         const team_wins =this.mappedTeamWins.execute(uniqueTeamNames,matches)
         
         const sorted_team_wins = this.sortedTeamWins.sort(team_wins)
        
        const top_n_wins = this.topNTeamWins.topN(sorted_team_wins,this.topN)

        return top_n_wins
   }
     
}

export class MappedTeamWins implements IMappedTeamWins{
   
   execute(teamNames: Set<string>, matches: Match[]): Map<string, number> {

       const team_wins = new Map<string,number>

         for(let t of teamNames)  
             team_wins.set(t,this.getTeamWinCount(t,matches));

         return team_wins
   }

    private getTeamWinCount(teamName:string,matches:Match[]){

     return matches.reduce((tot,match)=>{ 

               if(match.getWinningTeam()==teamName) tot+=1
               
               return tot
         
            },0)

  
    }
   
}
export interface IMappedTeamWins{
   execute(teamNames:Set<string>,matches:Match[]):Map<string,number>
}
export interface ISortedTeamWins{
   sort(team_wins:Map<string,number>):Map<string,number>
}

export interface ITopNTeamWins{
   topN(sortedTeamWins:Map<string,number>,topN:number):[string,number][]
}

export class TopNTeamWins implements ITopNTeamWins{
   topN(sortedTeamWins: Map<string, number>,topN:number): [string, number][] {
      
      return Array.from(sortedTeamWins.entries()).slice(0, topN);
   }
   
}

export class SortedTeamWins implements ISortedTeamWins{
  sort(team_wins: Map<string, number>): Map<string, number> {

  return new Map( Array.from(team_wins.entries())
                                       .sort((a, b) => b[1] - a[1]))
     
  }
  

}
