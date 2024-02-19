import { IFilter } from '../../../../src/application/interfaces/filters/filter';
import { Match } from '../../../../src/domain/entities/Match';

class SeasonFilter implements IFilter<Match> {
  execute(data: Match[]): Match[] {
    throw new Error('Method not implemented.');
  }

}

describe('year-filter', () => {


  describe('execute', () => {

    describe('gets the matches with the years', () => {
      
    })
    
    
    it('filter year not present',()=>{
      
    })



  })
  
  
})
