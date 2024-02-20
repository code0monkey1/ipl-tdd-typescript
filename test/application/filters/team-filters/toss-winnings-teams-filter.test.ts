
import { TossWinningTeams } from '../../../../src/application/interfaces/filters/team-filters/toss-winning-teams-filter';
import { createMatchWith } from '../match-filters/helpers';

describe('toss-winning-teams-filter',()=>{


  describe('execute', () => {

    describe('when toss winning teams are unique', () => {
      
    
      it('returns all toss winning team names',()=>{
  
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
       
      it('returns team correct names, even if they are in are in lower case ',()=>{
         
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

    describe('When toss winning teams have duplicates', () => {

      it('returns only unique names , when duplicates are present',()=>{
         
            const sut = new TossWinningTeams()
  
            const match1 = createMatchWith({tossWinner:'A'})
            const match2 = createMatchWith({tossWinner:'A'})
            const match3 = createMatchWith({tossWinner:'B'})
            const match4 = createMatchWith({tossWinner:'B'})
  
            const matches=[match1,match2,match3,match4]
  
            const expected=['a','b']
      
            //act
            const actual = sut.execute(matches)
      
            //assert
            expect(actual).toStrictEqual(expected)

      })
      
    })
    
    
        
  })
  

})