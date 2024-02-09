import { createMatch } from "../filter-matches-by-year/helper"
import { createMatchTeamFieldsAfterWinningToss } from "./helper"


describe('fields-after-winning-toss', () => {
      

    describe('isValid', () => {

      
      it("chose to field",()=>{
            
        //arrange
       const match = createMatch({tossDecision:'field'})
  
        const sut = createMatchTeamFieldsAfterWinningToss(match)
        const expected = true
        //act

        const actual= sut.isValid()
        
        //assert
        expect(actual).toBe(expected)

          
      })
             
      
      it('chose to bat',()=>{
        
                    
        //arrange
        const match = createMatch({tossDecision:"bat"})
        const sut =createMatchTeamFieldsAfterWinningToss(match)
        const expected=false
        //act

        const actual= sut.isValid()
        
        //assert
        expect(actual).toBe(expected)

      })
  
  

      
    })
    


     
})
