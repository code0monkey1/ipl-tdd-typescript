import { IFilter } from '../../../../src/application/interfaces/filters/filter';
import { Match } from '../../../../src/domain/entities/Match';

class YearFilter implements IFilter<Match> {
  execute(data: Match[]): Match[] {
    throw new Error('Method not implemented.');
  }

}



describe('year-filter', () => {


  describe('execute', () => {
    
    it('test',()=>{
      expect(true).toBe(true)
    })
  })
  
  
})
