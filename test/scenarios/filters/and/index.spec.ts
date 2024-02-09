import { IFilter } from "../../../../src/data/interfaces/filters"
import { createFilterMatchByYear, createMatch } from "../match-played-in-year/helper"

class And implements IFilter{

  constructor(private filters:IFilter[]){}
  isValid(): boolean {
     
     for(let filter of this.filters){
          
           if ( !filter.isValid()) return false
     }
     
    return true
  }

}

describe('filters', () => {
   
  describe('and', () => {
  
      it('meets all filter criteria',()=>{
         
          //arrange
          
          const match= createMatch({season:"2017"})

          const filters=[createFilterMatchByYear(match,"2017")] 

          const sut = new And(filters)

          const expected = true

          //act

          const actual = sut.isValid()

          //assert

          expect(actual).toBe(expected)

      })

      it.todo('does not meet all filter criteria')
    
  })
  
})


