
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