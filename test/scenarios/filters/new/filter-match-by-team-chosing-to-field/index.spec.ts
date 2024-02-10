
import { Match } from "../../../../../src/entities/Match"
import { IFilter } from "../../../../../src/scenarios/filters/new"

class FilterMatchByTeamChoosingToField implements IFilter<Match>{
  filter(arr: Match[]): Match[] {
    throw new Error("Method not implemented.")
  }
      
        
}


describe('filter-match-by-team-choosing-to-field', () => {


  describe('1 team choosing to field after winning toss', () => {
     
    it('has 1 match who choose to field',()=>{
        
      //arrange

      const sut = new FilterMatchByTeamChoosingToField()


      //act

      //assert

    })

    
  })
  
  
})
