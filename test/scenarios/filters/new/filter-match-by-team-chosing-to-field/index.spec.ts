
import { Match } from "../../../../../src/entities/Match"
import { IFilter } from "../../../../../src/scenarios/filters/new"
import { createMatch } from "../../filter-matches-by-year/helper"


class FilterMatchByTeamChoosingToField implements IFilter<Match>{

  constructor(private f:IFilter<Match>){}
  filter(arr: Match[]): Match[] {
    
    const filteredMatches = this.f.filter(arr)

    return filteredMatches.filter(m => m.getTossDecision()=='field')
  }
      
        
}


describe('filter-match-by-team-choosing-to-field', () => {

  describe('Choosing to field after winning toss', () => {
     
    it('has 1 match who choose to field ',()=>{
        
      //arrange
      const year='2017'
      
    
      const filter = createFilter()

      const sut = createFilterMatchByTeamChoosingToField(filter)
       
      const matches = [createMatch({tossDecision:"field"})]

      //act

      sut.filter(matches)

      //assert

      expect(filter.filter).toHaveBeenCalledWith(matches)

    })

    
  })
  
  
})

const createFilter=() =>{

    return {
      
        filter: jest.fn()
      
    }

    
}


const createFilterMatchByTeamChoosingToField=(filter:IFilter<Match>)=>{

 return new FilterMatchByTeamChoosingToField(filter)
}