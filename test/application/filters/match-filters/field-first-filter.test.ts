import { IFilter } from "../../../../src/application/interfaces/filters/filter";
import { Match } from "../../../../src/domain/entities/Match";

export class FieldFirst implements IFilter<Match>{

  execute(data: Match[]): Match[] {
    throw new Error("Method not implemented.");
  }
  
}

describe('field-first-filter', () => {

  describe('execute', () => {
    
    
      describe('1 match where team fields first', () => {
    
        it('returns 1 match that took toss_decision as fielding ',()=>{
    
          //arrange
    
          //act
    
          //assert
    
        })
        
      })
    
      describe('more than 1 match where team fields first', () => {
    
        
      })
      
    
      describe('no team fields first', () => {
        
      })
    
    
      describe('matches empty', () => {
        
      })
      
      


  })
  
  
  
})
