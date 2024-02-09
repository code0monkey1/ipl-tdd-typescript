
import { createTeamFieldsAfterWinningToss } from "../fields-after-winning-toss/helper";
import { createFilterMatchByYear, createMatch } from "../filter-matches-by-year/helper";
import { createAnd } from './helper';

describe('filters', () => {
   
  describe('and', () => {
  
      it('meets all filter criteria',()=>{
         
          //arrange
          
          const match= createMatch({season:"2017"})

          const filters=[createFilterMatchByYear(match,"2017"),createTeamFieldsAfterWinningToss('field')] 

          const sut = createAnd(filters)

          const expected = true

          //act

          const actual = sut.isValid()

          //assert

          expect(actual).toBe(expected)

      })

      it('does not meet 1 filter criteria',()=>{
      //arrange
          
          const match= createMatch({season:"2017"})

          const filters=[
            createFilterMatchByYear(match,"2017"),createTeamFieldsAfterWinningToss('bat')
          ] 

          const sut =createAnd(filters)

          const expected = false

          //act

          const actual = sut.isValid()

          //assert

          expect(actual).toBe(expected)
    
      })


      it('does not meet any filter criteria',()=>{
      //arrange
          
          const match= createMatch({season:"2016"})

          const filters=[
            createFilterMatchByYear(match,"2017"),createTeamFieldsAfterWinningToss('bat')
          ] 

          const sut = createAnd(filters)

          const expected = false

          //act

          const actual = sut.isValid()

          //assert

          expect(actual).toBe(expected)
    
      })

  })
  
})

