import { IFilter } from '../../../../src/application/interfaces/filters/filter';
import { Match, MatchProps, Result, TossDecision } from '../../../../src/domain/entities/Match';

class SeasonFilter implements IFilter<Match> {

  constructor(private year:number){}
  execute(data: Match[]): Match[] {
    
      return data
  }

}

describe('year-filter', () => {


  describe('execute', () => {

    describe('has matches with season year', () => {

      it('returns a list of matches with the given season',()=>{

        //arrange
        const sut = new SeasonFilter()

        const matchProps1:MatchProps={
          matchId: 0,
          season: 2017,
          city: '',
          date: new Date(),
          team1: '',
          team2: '',
          tossWinner: '',
          tossDecision: TossDecision.FIELD,
          result: Result.NORMAL,
          winner: ''
        }
        const match1 = new Match(matchProps1)


        const matchProps2:MatchProps={
          matchId: 0,
          season: 2017,
          city: '',
          date: new Date(),
          team1: '',
          team2: '',
          tossWinner: '',
          tossDecision: TossDecision.FIELD,
          result: Result.NORMAL,
          winner: ''
        }
        const match2 = new Match(matchProps2)

        const matches= [ match1,match2]
        //act
        const result = sut.execute(matches)

        //assert

      })
        
    })
    
    describe('has no matches with season year', () => {
      
    })
    


  })
  
  
})
