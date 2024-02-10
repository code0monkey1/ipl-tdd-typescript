import { Match } from '../../../../src/entities/Match';
import { IFilter } from '../../../../src/scenarios/filters/new/index';
import { createMatch } from '../filter-matches-by-year/helper';


export class FilterMatchByYear implements IFilter<Match>{

  constructor(private year:string){}
  
  filter(arr: Match[]): Match[] {
    throw new Error("Method not implemented.");
  }
  
}

describe('filter-match-by-year', () => {


        describe('has one match of given year', () => {

          it('will return one match with given year',()=>{

            //arrange
            const year ='2017'
            const sut = new FilterMatchByYear(year)

            const matches = [ 
              createMatch({season:"2017"}),
              createMatch({season:"2018"}),
              createMatch({season:"2019"}) ]

            //act 


            //assert



          })
          
        })
        
  
})
