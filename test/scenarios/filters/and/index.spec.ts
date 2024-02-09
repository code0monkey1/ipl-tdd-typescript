
import { IFilter } from "../../../../src/data/interfaces"
import { createFilterMatchByYear, createMatch } from "../filter-matches-by-year/helper"

export class And implements IFilter{

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

      it('does not meet some filter criteria',()=>{
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
  })
  
})


