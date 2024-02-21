
import { IFilter } from '../../../../src/application/interfaces/filters/filter';
import { Match, MatchProps } from '../../../../src/domain/entities/Match';
import { createMatchWith } from './helpers';

class Filter<F, I> implements IFilter<Partial<F>, I> {
  constructor(private data: I[]) {}

  execute(filters: Partial<F>): I[] {
    return this.data.filter(item =>
      Object.keys(filters).every(key => item[key as keyof I] === filters[key as keyof F])
    );
  }
}


describe('generic filter', () => {
  
  it("filers as per attributes",()=>{
     
      //arrange
      const match1 = createMatchWith({season:2017})
      const match2 = createMatchWith({season:2016})
      
      const sut = new Filter<Partial<MatchProps>,Match>([match1,match2])

      const filters:Partial<MatchProps> ={
        season:2016
      }
      const expected=[match2]
      //act 

     const actual= sut.execute(filters)
   
      //assert

     expect(actual).toStrictEqual(expected)
    
  })

})
