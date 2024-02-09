import { Match } from "../../../src/entities/Match";
import { IUniqueTossWinningTeams } from "../../../src/scenarios/unique-toss-winning-team-names";

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

         for(let name of teamNames){

            const tot= matches.reduce((tot,match)=>{ 

               if(match.getWinningTeam()==name) tot+=1
               
               return tot
         
            },0)
             
           team_wins.set(name,tot);

         }

         return team_wins
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



describe('top-n-winning-teams', () => {
     
       
   describe('top 0 teams', () => {
         
        it.todo('should throw an Error')
       
     })


   describe('top 1 team', () => {

       it.todo('should return the team with the top score')
     
   })


   describe('top 2 teams', () => {

       it.todo('should return 2 teams with the highest scores')
     
   })


   describe('when multiple teams have same winning count', () => {

      it.todo('should return only the top N teams , alphabetically sorted ')

     
   })
   
    
    
})
