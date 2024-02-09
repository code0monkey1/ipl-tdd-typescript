import { IFilter } from "../../../../src/data/interfaces/filters"
import { Match } from "../../../../src/entities/Match"
import { createMatch } from "../filter-matches-by-year/helper"

class TeamFieldsAfterWinningToss implements IFilter{

  constructor(private match:Match){}
  isValid(): boolean {
    throw new Error("Method not implemented.")
  }
  
}


describe('fielded-after-winning-toss', () => {
      

    describe('isValid', () => {

      
      it("chose to field",()=>{
            
        //arrange
        const match = createMatch({tossDecision:'field'})
        const sut = new TeamFieldsAfterWinningToss(match)

        //act

        const actual= sut.isValid()
        
        //assert
        expect(actual).toBeTruthy()

          
      })
             
      
      it.todo('chose to bat')
  
  

      
    })
    

     
})
