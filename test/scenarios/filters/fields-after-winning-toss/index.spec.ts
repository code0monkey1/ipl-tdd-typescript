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

      
      it("win toss and choose to field",()=>{
            
        //arrange
        const match = createMatch({})
        const sut = new TeamFieldsAfterWinningToss(match)

            //act
            //assert
          
      })
             
      
      it.todo('fielded but did not win toss')
  
   
      it.todo('won toss but did not field')

      
    })
    

     
})
