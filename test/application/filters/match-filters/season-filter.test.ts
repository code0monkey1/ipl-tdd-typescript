import { IFilter } from '../../../../src/application/interfaces/filters/filter';
import { Match, MatchProps, Result, TossDecision } from '../../../../src/domain/entities/Match';

class SeasonFilter implements IFilter<Match> {

  constructor(private year:number){}
  execute(data: Match[]): Match[] {
    
    return data.filter( m => m.getSeason()===this.year)
      
  }

}

describe('year-filter', () => {


  describe('execute', () => {

    describe('has matches with season year', () => {

      it('returns a list of matches with the given season',()=>{

        //arrange
        const filterYear=2017
        const sut = new SeasonFilter(filterYear)

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
          season: 2016,
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

        const expected = [match1]
        //act
        const actual = sut.execute(matches)

        //assert
       
        expect(actual).toStrictEqual(expected)

      })
        
    })
    


  })
  
  
})
