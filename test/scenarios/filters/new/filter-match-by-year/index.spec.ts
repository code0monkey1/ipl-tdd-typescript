import { Match } from '../../../../../src/entities/Match';
import { FilterMatchByYear, IFilter } from '../../../../../src/scenarios/filters/new/index';
import { createMatch } from '../../filter-matches-by-year/helper';




describe('filter-match-by-year', () => {


        describe('has one match of given year', () => {

          it('will return one match with given year',()=>{

            //arrange
            const year ='2017'
            
            const matches = [ 
              createMatch({season:"2017"}),
              createMatch({season:"2018"}),
              createMatch({season:"2019"}) ]
              
            const sut = new FilterMatchByYear(year)

            const expected = [ createMatch({season:"2017"})]
            //act 
            

            const actual =sut.execute(matches)


            //assert

            expect(actual).toStrictEqual(expected)



          })
          
        })

        describe('has no match of given year', () => {

          it('will return one match with given year',()=>{

            //arrange
            const year ='2016'
            
            const matches = [ 
              createMatch({season:"2017"}),
              createMatch({season:"2018"}),
              createMatch({season:"2019"}) ]
              
            const sut = new FilterMatchByYear(year)

            const expected = [] as Match []
            //act 
            

            const actual =sut.execute(matches)


            //assert

            expect(actual).toStrictEqual(expected)

          })
          
        })

        describe('has all matches of given year', () => {

          it('will return all matches ',()=>{

            //arrange
            const year ='2017'
              
            const matches = [ 
              createMatch({season:"2017"}),
              createMatch({season:"2017"}),
              createMatch({season:"2017"}) ]
              
            const sut = new FilterMatchByYear(year)

            const expected = matches
            //act 

            const actual =sut.execute(matches)


            //assert

            expect(actual).toStrictEqual(expected)

          })
          
        })

        
  
})

