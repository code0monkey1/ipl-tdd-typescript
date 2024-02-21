import { IFilter1 } from '../../../../src/application/interfaces/filters/filter';
import { Match, MatchProps } from '../../../../src/domain/entities/Match';
import { createMatchWith } from '../match-filters/helpers';


class GenericFilter implements IFilter1<Partial<MatchProps>,Match>{

  constructor(private match:Match[]){}

  execute(filters: Partial<MatchProps>): Match[] {

   return this.match.filter( m =>Object.keys(filters).every( key => m[key]===filters[key]))
    
  }

}

describe('generic filter', () => {

  
  it("filers as per attributes",()=>{
     
      //arrange
      const match1 = createMatchWith({season:2017})
      const match2 = createMatchWith({season:2016})
      const sut = new GenericFilter([match1,match2])

      const filters:Partial<MatchProps> ={
        season:2016
      }
      const expected=[match1]
      //act 

     const actual= sut.execute(filters)
   
      //assert

     expect(actual).toStrictEqual(expected)
    


  })

})
