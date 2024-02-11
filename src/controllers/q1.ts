
import { IRepo } from "../data/interfaces";
import { Match } from "../entities/Match";
import { IFilter } from "../scenarios/filters/new";
import { IUniqueTossWinningTeams } from "../scenarios/unique-toss-winning-team-names";


export class TopTeamsUseCase{

          constructor(
            private matchesRepo:IRepo<Match>,
            private matchFilter:IFilter<Match>,
            private topNTeams:ITopNWinningTeams
            ){}

          execute(){
                
            const matches = this.matchesRepo.data

            // filter matches by year , and choose to field first
            const filteredMatches = this.matchFilter.execute(matches)

            return this.topNTeams.execute(filteredMatches)
   
          }
}

interface ITeamsSortedByWinCount{

    execute(matches:Match[]):[string,number][]
}

export class TeamsSortedByWinCount implements ITeamsSortedByWinCount {
   
      constructor( 
         private tossWinningTeamWinCount:ITossWinningTeamWinCount,
        private sortedTeamWins:ISortedTeamWinsMap){}

        execute(matches:Match[]):[string,number][]{  

         const teamWinCount = this.tossWinningTeamWinCount.execute(matches)
         
         return  this.sortedTeamWins.execute(teamWinCount)

        }
}


interface ITopNWinningTeams{

 execute(matches:Match[]):[string, number][]

}


export class TopNWinningTeams implements ITopNWinningTeams{

   constructor(
      private topN:number, 
      private teamsSortedByWinCount:ITeamsSortedByWinCount,
      private topNTeamWins:ITopNTeams
      ){}

   execute(matches:Match[]):[string, number][]{

         
         const sortedTeamsWithCount = this.teamsSortedByWinCount.execute(matches)
        
         return this.topNTeamWins.execute(sortedTeamsWithCount,this.topN)

   }
     
}


interface ITossWinningTeamWinCount{

  execute(matches:Match[]):[string,number][]

}

export class TossWinningTeamTeamWinCount implements ITossWinningTeamWinCount{

   constructor(
            private uniqueTossWinningTeams:IUniqueTossWinningTeams,
            private mapTeamWins :IMapTeamWins
   ){}

   execute(matches:Match[]):[string,number][]{

         const teamNames  =  this.uniqueTossWinningTeams.getNames(matches)

         const team_winsCount =this.mapTeamWins.execute(teamNames,matches)

         return team_winsCount
   }
   
}

export class MapTeamWins implements IMapTeamWins{
   
   execute(teamNames: string[], matches: Match[]): [string,number][]{

         const team_wins = new Map<string,number>

         teamNames.forEach(t =>  team_wins.set(t,this.getTeamWinCount(t,matches))) 
            
         return Array.from(team_wins.entries()).map(([key, value]) => [key, value]);
   }

    private getTeamWinCount(teamName:string,matches:Match[]){

     return matches.reduce((tot,match)=>{ 

               if(match.getWinningTeam()==teamName) tot+=1
               
               return tot
         
            },0)

    }
   
}
export interface IMapTeamWins{
   execute(teamNames:string[],matches:Match[]):[string,number][]
}
export interface ISortedTeamWinsMap{
   execute(team_wins:[string,number][]):[string,number][]
}

export interface ITopNTeams{
   execute(sortedTeamWins:[string,number][],topN:number):[string,number][]
}

export class TopNTeams implements ITopNTeams{
   execute(sortedTeamWins: [string, number][],topN:number): [string, number][] {
      
      return sortedTeamWins.slice(0, topN);
   }
   
}

export class SortedTeamWins implements ISortedTeamWinsMap{
   
  execute(team_wins:[string,number][]):[string,number][] {

      team_wins.sort((a, b) => b[1] - a[1])

      return team_wins
     
  }
  
}
