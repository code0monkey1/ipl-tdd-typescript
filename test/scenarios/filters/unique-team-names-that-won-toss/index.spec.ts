import { UniqueTossWinningTeams } from '../../../../src/scenarios/unique-toss-winning-team-names/index';
import { createMatch } from "../filter-matches-by-year/helper";


describe('unique-team-names-that-won-toss', () => {


   describe('when only 1 unique team , which is tossWinner ,', () => {
       

       it('will return team a',()=>{

         //arrange 
         const matches = [
          createMatch({tossWinner:'a'}),
          createMatch({tossWinner:'a'}),
          createMatch({tossWinner:'a'}),
          createMatch({tossWinner:'a'})]

         const sut = new UniqueTossWinningTeams()

         const expected =['a']
         
         //act 
         const actual = sut.getNames(matches)
 

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

         const sut = new UniqueTossWinningTeams()

         const expected =['a','b']

         //act 

         const actual = sut.getNames(matches)
 

         //assert
         expect(actual).toStrictEqual(expected)
         expect(actual.length).toBe(2)

       })

       
   })
   
  
})
