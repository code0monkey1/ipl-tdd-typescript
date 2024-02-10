
import { Match } from "../../../../../src/entities/Match"
import { FilterMatchByTeamChoosingToField, IFilter } from "../../../../../src/scenarios/filters/new"
import { createMatch } from "../../filter-matches-by-year/helper"


describe('filter-match-by-team-choosing-to-field', () => {

  describe('Choosing to field after winning toss', () => {
     
    it('has 1 match who choose to field ',()=>{
        
      //arrange   
    
      const f = createFilter()

      const sut = createFilterMatchByTeamChoosingToField(f)
       
      const matches = [createMatch({tossDecision:"field"})]

      //act

      const actual = sut.filter(matches)

      //assert

      expect(f.filter).toHaveBeenCalledWith(matches)

      expect(actual).toStrictEqual(matches)

    })

    
  })

    describe('Choosing to bat after winning toss', () => {
     
    it('has no match who choose to field ',()=>{
        
      //arrange   
    
      const f = createFilter()

      const sut = createFilterMatchByTeamChoosingToField(f)
       
      const matches = [
        createMatch({tossDecision:"bat"}),
      createMatch({tossDecision:"bat"})]

      const expected = [] as Match[]

      //act

      const actual = sut.filter(matches)


      //assert

      expect(f.filter).toHaveBeenCalledWith(matches)

      expect(actual).toStrictEqual(expected)

    })

    
  })
  
  
})

const createFilter=() =>{

    return {
      
        filter: jest.fn((arr:Match[])=>{
           return arr
        })
      
    }

    
}


const createFilterMatchByTeamChoosingToField=(filter:IFilter<Match>)=>{

 return new FilterMatchByTeamChoosingToField(filter)
}