import { Match } from "../../../../src/entities/Match"
import { createMatch } from "../filter-matches-by-year/helper"

  class UniqueTossWinners{

       getTeamNames( matches:Match[]):Set<string>{
        
          const tossWinningTeamNames = new Set<string>
          
          for(let match of matches){
             if(!tossWinningTeamNames.has(match.getTossWinner()))
                   tossWinningTeamNames.add(match.getTossWinner())
          }
         
         return tossWinningTeamNames
       }
           
  }


describe('unique-team-names-that-won-toss', () => {


   describe('when only 1 unique team , which is tossWinner ,', () => {
       

       it('will return team a',()=>{

         //arrange 
         const match = [createMatch({tossWinner:'a'})]

         const sut = new UniqueTossWinners()

         //act 


         //assert

       })


   })


   describe('when 2 unique teams , which won toss ,', () => {
       

       it.todo('will return team a')

       
   })
   
  
})
