import { IFilter } from "../../../../src/data/interfaces/filters"
import { Match } from "../../../../src/entities/Match"

class FieldsAfterWinningToss implements IFilter{

  constructor(private match:Match){}
  isValid(): boolean {
    throw new Error("Method not implemented.")
  }
  
}


describe('fielded-after-winning-toss', () => {
      

    describe('isValid', () => {

      
      it("win toss and choose to field",()=>{
            
        //arrange
        const filterYear
        const sut = new FieldsAfterWinningToss(match)

            //act
            //assert
          
      })
             
      
      it.todo('fielded but did not win toss')
  
   
      it.todo('won toss but did not field')

      
    })
    

     
})
