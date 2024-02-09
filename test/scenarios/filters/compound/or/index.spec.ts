import { IFilter } from "../../../../../src/data/interfaces"
import { createFilterMatchByYear, createMatch } from "../../filter-matches-by-year/helper"

class Or implements IFilter{
  isValid(): boolean {
    throw new Error("Method not implemented.")
  }
  
}
describe('or', () => {

  describe('isValid', () => {


    it('meets one criteria',()=>{
        
         //arrange
          
         const match = createMatch({season:"2017"})
         const criteria= [createFilterMatchByYear(match,"2017") ,createFilterMatchByYear(match,"2016")]

         const sut = new Or(criteria)


         //act


         //assert

    })

    it.todo('meets no criteria')



    
  })
  
  
})
