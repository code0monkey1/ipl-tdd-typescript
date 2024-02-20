import { IFilter } from "../../../../src/application/interfaces/filters/filter";
import { SeasonFilter } from "../../../../src/application/interfaces/filters/match-filters/season-filter";
import { DeliveryProps } from '../../../../src/domain/entities/Delivery';
import { Match, MatchProps, TossDecision } from '../../../../src/domain/entities/Match';
import { createMatchWith } from "./helpers";

export class TossDecisionFilter implements IFilter<Match>{

  constructor(private tossDecision:TossDecision){}

  execute(data: Match[]): Match[] {
    return data.filter( m => m.getTossDecision()===this.tossDecision)
  }
  
}

describe('toss-decision-filter', () => {


  describe('execute', () => {

    describe('fields first', () => {
      
        describe('1 match where team fields first', () => {
      
          it('returns 1 match that took `TossDecision` as fielding ',()=>{
      
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
    
      
        describe('no team fields first', () => {

             it('returns empty match array that took `TossDecision` as fielding ',()=>{
      
            //arrange
            const sut = new TossDecisionFilter(TossDecision.FIELD)
  
            const match1 = createMatchWith({tossDecision:TossDecision.BAT})
            const match2 = createMatchWith({tossDecision:TossDecision.BAT})
  
            const matches=[match1,match2]
  
            const expected:Match[]=[]
      
            //act
            const actual = sut.execute(matches)
      
            //assert
            expect(actual).toStrictEqual(expected)
      
          })
          
          
        })
      
  
        describe('matches empty', () => {

           it('returns empty match array that took `TossDecision` as fielding ',()=>{
      
            //arrange
            const sut = new TossDecisionFilter(TossDecision.FIELD)

            const matches:Match[]=[]
  
            const expected:Match[]=[]
      
            //act
            const actual = sut.execute(matches)
      
            //assert
            expect(actual).toStrictEqual(expected)
      
          })
          
        })
      
    })

  })
  
  
})

it('learning test',()=>{
  
    const match1 = createMatchWith({tossDecision:TossDecision.FIELD,season:2017})

    const match3 = createMatchWith({tossDecision:TossDecision.FIELD,season:2017})
    const match2 = createMatchWith({tossDecision:TossDecision.BAT})
   
    const filters:IFilter<Match>[] = 
    [ new SeasonFilter(2017),new TossDecisionFilter(TossDecision.FIELD)]

     const result = filters.reduce( (acc,f)=>acc=f.execute(acc),[match1,match2,match3])

     expect(result).toStrictEqual([match1,match3])

})