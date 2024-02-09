
import { createTeamFieldsAfterWinningToss } from './helper';

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
    


     
})
