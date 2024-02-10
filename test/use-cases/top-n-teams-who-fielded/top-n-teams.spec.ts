import { ITopNTeams } from "../../../src/controllers/q1";

export class TopNTeams implements ITopNTeams{
   topN(sortedTeamWins: Map<string, number>,topN:number): [string, number][] {
      
      return Array.from(sortedTeamWins.entries()).slice(0, topN);
   }
   
}


describe('top-n-teams', () => {
     describe('execute', () => {

        describe('has teams less than n', () => {

          it('has 0 teams , but we query for top 3',()=>{

                //arrange

                const sut = new TopNTeams()
                const topN = 2
                const expected = [] as  [string,number] []
                
                //act

                const actual = sut.topN(new Map([]),topN)

                //assert
                expect(actual).toStrictEqual(expected)
          })


          it('has 1 team , but we query for top 2',()=>{

                //arrange

                const sut = new TopNTeams()
                const topN = 2
                const expected = [ ['a',1] ]
                
                //act

                const actual = sut.topN(new Map([['a',1]]),topN)

                //assert
                expect(actual).toStrictEqual(expected)
          })
          
        })
         describe('has teams more than n', () => {

          it('has 3 teams , we query for top 2',()=>{
               
              //arrange

                const sut = new TopNTeams()
                const topN = 2
                const expected = [ ['a',3], ['b',2]]
                
                //act

                const actual = sut.topN(new Map([['a',3],['b',2],['c',1]]),topN)

                //assert
                expect(actual).toStrictEqual(expected)
          })

          
        })

          describe('has teams equal to n', () => {

          it('has 2 teams, we query top 2',()=>{
                //arrange

                const sut = new TopNTeams()
                const topN = 2
                const expected = [ ['a',3], ['b',2]]
                
                //act

                const actual = sut.topN(new Map([['a',3],['b',2]]),topN)

                //assert
                expect(actual).toStrictEqual(expected)
          })
          
        })

        

        
     })
     
})
