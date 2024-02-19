import { IFilter } from "../../../../src/application/interfaces/filters/filter";
import { Match, TossDecision } from '../../../../src/domain/entities/Match';
import { createMatchWith } from "./helpers";

export class TossDecisionFilter implements IFilter<Match>{

  constructor(private tossDecision:TossDecision){}

  execute(data: Match[]): Match[] {
    return data.filter( m => m.getTossDecision()===this.tossDecision)
  }
  
}

describe('toss-decision-filter', () => {
 

  describe('execute', () => {
    
      describe('1 match where team fields first', () => {
    
        it('returns 1 match that took toss_decision as fielding ',()=>{
    
          //arrange
          const sut = new TossDecisionFilter(TossDecision.FIELD)

          const match1 = createMatchWith({tossDecision:TossDecision.FIELD})
          const match2 = createMatchWith({tossDecision:TossDecision.BAT})

          const matches=[match1,match2]

          const expected=[match1]
    
          //act
          const actual = sut.execute(matches)
    
          //assert
          expect(actual).toStrictEqual(expected)
    
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
