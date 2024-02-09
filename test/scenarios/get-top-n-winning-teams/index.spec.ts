import { Match } from "../../../src/entities/Match"
import { IUniqueTossWinningTeams } from "../../../src/scenarios/unique-toss-winning-team-names"

class TopNWinningTeams{

   constructor(private topN:number, private uniqueTossWinningTeams:IUniqueTossWinningTeams){}

   execute(matches:Match[]){

         const uniqueTeamNames  =  this.uniqueTossWinningTeams.getNames(matches)

         const map = new Map<string,number>

         for(let name of uniqueTeamNames){
             
           map.set(name,1)
            
         }

          
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
