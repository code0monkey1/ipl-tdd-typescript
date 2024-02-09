import { Match } from "../../../src/entities/Match";
import { IUniqueTossWinningTeams } from "../../../src/scenarios/unique-toss-winning-team-names";

export class TopNWinningTeams{

   constructor(private topN:number, 
      private uniqueTossWinningTeams:IUniqueTossWinningTeams,){}

   execute(matches:Match[]):[string, number][]{

         const uniqueTeamNames  =  this.uniqueTossWinningTeams.getNames(matches)

         const map = new Map<string,number>

         for(let name of uniqueTeamNames){
             
           let count = map.get(name) || 1;

           map.set(name, count + 1);

         }

         const sortedMap = new Map(
                     Array.from(map.entries())
            .sort((a, b) => b[1] - a[1])
         );
         
        return Array.from(sortedMap.entries()).slice(0, this.topN);
      
   }
     
}

interface ISortedTeamScores{
   sort(uniqueTeamNames:string[],)
}

export class SortedTeamScores implements ISortedTeamScores{
   sort(uniqueTeamNames: string[]) {
      throw new Error("Method not implemented.");
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
