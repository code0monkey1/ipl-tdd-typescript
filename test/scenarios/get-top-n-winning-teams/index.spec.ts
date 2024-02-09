import { Match } from "../../../src/entities/Match";
import { IUniqueTossWinningTeams } from "../../../src/scenarios/unique-toss-winning-team-names";

export class TopNWinningTeams{

   constructor(
      private topN:number, 
      private uniqueTossWinningTeams:IUniqueTossWinningTeams,
      private mappedTeamScores :IMappedTeamScores,
      private sortedTeamScores:ISortedTeamScores,
      private topNTeams:ITopNTeams
      ){}

   execute(matches:Match[]):[string, number][]{

         const uniqueTeamNames  =  this.uniqueTossWinningTeams.getNames(matches)

         const map = new Map<string,number>

         for(let name of uniqueTeamNames){

            const tot= matches.reduce((tot,match)=>{ 

               if(match.getWinningTeam()==name) tot+=1
               
               return tot
         
            },0)
             
           map.set(name,tot);

         }

         const sortedMap = new Map( Array.from(map.entries())
                                       .sort((a, b) => b[1] - a[1])
         );
         
        return Array.from(sortedMap.entries()).slice(0, this.topN);
      
   }
     
}

class MappedTeamScores implements IMappedTeamScores{
   execute(teamNames: string[], matches: Match[]): Map<string, number> {

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
interface IMappedTeamScores{
   execute(teamNames:string[],matches:Match[]):Map<string,number>
}
interface ISortedTeamScores{
   sort(uniqueTeamNames:string[],matches:Match[]):Map<string,number>
}

interface ITopNTeams{
   topN(map:Map<string,number>,topN:number):[string,number][]
}

export class TopNTeams implements ITopNTeams{
   topN(map: Map<string, number>,topN:number): [string, number][] {
      return Array.from(map.entries()).slice(0, topN);
   }
   
}

export class SortedTeamScores implements ISortedTeamScores{
   sort(uniqueTeamNames: string[],matches:Match[]) {
     const map = new Map<string,number>

         for(let name of uniqueTeamNames){
             
           let count = map.get(name) || 1;

           map.set(name, count + 1);

         }

    return map
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
