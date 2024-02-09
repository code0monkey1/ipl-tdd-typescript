import { IFilter } from "../../../../../src/data/interfaces"
import { createFilterMatchByYear, createMatch } from "../../filter-matches-by-year/helper"

class Or implements IFilter{

  constructor(private filters:IFilter[]){}
  isValid(): boolean {

    return this.filters.some( f => f.isValid())

  }
  
}
describe('or', () => {

  describe('isValid', () => {


    it('meets at least one criteria',()=>{
        
         //arrange
          
         const match = createMatch({season:"2017"})

         const filters= [
           createFilterMatchByYear(match,"2017"),
           createFilterMatchByYear(match,"2016"),
           createFilterMatchByYear(match,"2018")
        ]

         const expected= true

         const sut = new Or(filters)


         //act

         const actual =sut.isValid()


         //assert

         expect(actual).toBe(expected)

    })

    it('meets no criteria',()=>{
         
         //arrange
          
         const match = createMatch({season:"2017"})

         const filters= [createFilterMatchByYear(match,"2015"),createFilterMatchByYear(match,"2016")]

         const expected= false

         const sut = new Or(filters)


         //act

         const actual =sut.isValid()


         //assert

         expect(actual).toBe(expected)

    })



    
  })
  
  
})
