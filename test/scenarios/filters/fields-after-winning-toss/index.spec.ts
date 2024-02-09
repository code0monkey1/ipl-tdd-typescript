import { IFilter } from "../../../../src/data/interfaces/filters"
import { Match } from "../../../../src/entities/Match"
import { createMatch } from "../filter-matches-by-year/helper"

class TeamFieldsAfterWinningToss implements IFilter{

  constructor(private match:Match){}
  isValid(): boolean {
    return this.match.getTossDecision()==='field'
  }
  
}


describe('fielded-after-winning-toss', () => {
      

    describe('isValid', () => {

      
      it("chose to field",()=>{
            
        //arrange
        const match = createMatch({tossDecision:'field'})
        const sut = new TeamFieldsAfterWinningToss(match)
        const expected = true
        //act

        const actual= sut.isValid()
        
        //assert
        expect(actual).toBe(expected)

          
      })
             
      
      it('chose to bat',()=>{
        
                    
        //arrange
        const match = createMatch({tossDecision:'bat'})
        const sut = new TeamFieldsAfterWinningToss(match)
        const expected=false
        //act

        const actual= sut.isValid()
        
        //assert
        expect(actual).toBe(expected)

      })
  
  

      
    })
    

     
})
