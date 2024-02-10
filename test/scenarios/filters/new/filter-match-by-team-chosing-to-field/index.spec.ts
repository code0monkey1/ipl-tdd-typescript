
import { Match } from "../../../../../src/entities/Match"
import { IFilter } from "../../../../../src/scenarios/filters/new"
import { createMatch } from "../../filter-matches-by-year/helper"


class FilterMatchByTeamChoosingToField implements IFilter<Match>{

  constructor(private f:IFilter<Match>){}
  filter(arr: Match[]): Match[] {
    throw new Error("Method not implemented.")
  }
      
        
}


describe('filter-match-by-team-choosing-to-field', () => {

  describe('Choosing to field after winning toss', () => {
     
    it('has 1 match who choose to field ',()=>{
        
      //arrange
      const year='2017'
      
    
   
      const sut = createFilterMatchByTeamChoosingToField(filter)
       
      const matches = [createMatch({tossDecision:"field"})]

      //act

      sut.filter(matches)

      //assert

    })

    
  })
  
  
})

const createFilter=() =>{

    return {
      
        filter: jest.fn()
      
    }

    
}


const createFilterMatchByTeamChoosingToField=(filter:IFilter<Match>)=>{

 return   new FilterMatchByTeamChoosingToField(filter)
}