import { ITossWinningTeamsFilter } from '../../../../src/application/interfaces/filters/team-filters/toss-winning-teams-filter';
import { Match, TossDecision } from '../../../../src/domain/entities/Match';
import { createMatchWith } from '../match-filters/helpers';

export class TossWinningTeams implements ITossWinningTeamsFilter{
  execute(matches: Match[]): string[] {
    
    const teams = new Set<string>()

    matches.forEach( m =>  teams.add(m.getTossWinner().toLowerCase()) )

    return [...teams]

  }
  
}

describe('toss-winning-teams-filter',()=>{


  describe('execute', () => {
        
      it('returns all unique toss winning team names',()=>{

                //arrange
            const sut = new TossWinningTeams()
  
            const match1 = createMatchWith({tossWinner:'A'})
            const match2 = createMatchWith({tossWinner:'B'})
            const match3 = createMatchWith({tossWinner:'C'})
  
            const matches=[match1,match2,match3]
  
            const expected=['a','b','c']
      
            //act
            const actual = sut.execute(matches)
      
            //assert
            expect(actual).toStrictEqual(expected)


      })
       
      it('returns team names, even if they are in are in lower case ',()=>{
         
            const sut = new TossWinningTeams()
  
            const match1 = createMatchWith({tossWinner:'A'})
            const match2 = createMatchWith({tossWinner:'B'})
            const match3 = createMatchWith({tossWinner:'c'})
  
            const matches=[match1,match2,match3]
  
            const expected=['a','b','c']
      
            //act
            const actual = sut.execute(matches)
      
            //assert
            expect(actual).toStrictEqual(expected)

      })
       
  })
  

})