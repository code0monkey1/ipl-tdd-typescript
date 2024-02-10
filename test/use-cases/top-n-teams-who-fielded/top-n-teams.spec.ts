
import { createTopNTeams } from "./helper";


describe('top-n-teams', () => {
     describe('execute', () => {

        describe('has teams less than n', () => {

          it('has 0 teams , but we query for top 3',()=>{

                //arrange

                const sut = createTopNTeams()
                const topN = 2
                const expected = [] as  [string,number] []
                
                //act

                const actual = sut.topN([],topN)

                //assert
                expect(actual).toStrictEqual(expected)
          })


          it('has 1 team , but we query for top 2',()=>{

                //arrange

                const sut = createTopNTeams()
                const topN = 2
                const expected = [ ['a',1] ]
                
                //act

                const actual = sut.topN([['a',1]],topN)

                //assert
                expect(actual).toStrictEqual(expected)
          })
          
        })
         describe('has teams more than n', () => {

          it('has 3 teams , we query for top 2',()=>{
               
              //arrange

                const sut = createTopNTeams()
                const topN = 2
                const expected = [ ['a',3], ['b',2]]
                
                //act

                const actual = sut.topN([['a',3],['b',2],['c',1]],topN)

                //assert
                expect(actual).toStrictEqual(expected)
          })

          
        })

          describe('has teams equal to n', () => {

          it('has 2 teams, we query top 2',()=>{
                //arrange

                const sut = createTopNTeams()
                const topN = 2
                const expected = [ ['a',3], ['b',2]]
                
                //act

                const actual = sut.topN([['a',3],['b',2]],topN)

                //assert
                expect(actual).toStrictEqual(expected)
          })
          
        })

        

        
     })
     
})
