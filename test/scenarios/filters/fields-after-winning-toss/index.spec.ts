
import { TeamFieldsAfterWinningToss } from '../../../../src/scenarios/filters/fields-after-winning-toss/index';

import { createMatch } from "../match-played-in-year/helper";

describe('fields-after-winning-toss', () => {
      

    describe('isValid', () => {

      
      it("chose to field",()=>{
            
        //arrange

        const sut = createTeamFieldsAfterWinningToss('field')
        const expected = true
        //act

        const actual= sut.isValid()
        
        //assert
        expect(actual).toBe(expected)

          
      })
             
      
      it('chose to bat',()=>{
        
                    
        //arrange
        const sut =createTeamFieldsAfterWinningToss('bat')
        const expected=false
        //act

        const actual= sut.isValid()
        
        //assert
        expect(actual).toBe(expected)

      })
  
  

      
    })
    
    const createTeamFieldsAfterWinningToss=(tossDecision:string)=>{
          
          const match = createMatch({tossDecision})
         return new TeamFieldsAfterWinningToss(match)

    }

     
})
