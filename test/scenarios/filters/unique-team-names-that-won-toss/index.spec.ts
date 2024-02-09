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
         const matches = [
          createMatch({tossWinner:'a'}),
         createMatch({tossWinner:'a'}),
         createMatch({tossWinner:'a'}),
         createMatch({tossWinner:'a'})]

         const sut = new UniqueTossWinners()

         const expected =new Set('a')

         //act 

         const actual = sut.getTeamNames(matches)
 

         //assert
         expect(actual).toStrictEqual(expected)

       })


   })


   describe('when 2 unique teams , which won toss ,', () => {
       

       it('will return team a and b',()=>{
        
          //arrange 
         const matches = [
          createMatch({tossWinner:'a'}),
         createMatch({tossWinner:'a'}),
         createMatch({tossWinner:'b'}),
         createMatch({tossWinner:'b'})]

         const sut = new UniqueTossWinners()

         const expected =new Set(['a','b'])

         //act 

         const actual = sut.getTeamNames(matches)
 

         //assert
         expect(actual).toStrictEqual(expected)


       })

       
   })
   
  
})
