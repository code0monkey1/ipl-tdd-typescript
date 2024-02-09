import { IRepo } from "../../../../src/data/interfaces";
import { IFilter } from '../../../../src/data/interfaces/filters/index';
import { Match, TMatchProps } from "../../../../src/entities/Match";
import { createMatchesRepo } from "../../team-win-count/helper";

class FilterMatchesByYear implements IFilter{
  
  constructor(private match:Match,private filterYear:string){}
  isValid(): boolean {
     return this.match.getYear()==this.filterYear
  }



}

describe('filter-matches-by-year', () => {
  
  it('no match',()=>{


    //arrange

    const matchProps:TMatchProps={
      matchId: "",
      season: "",
      city: "",
      date: "",
      team1: "",
      team2: "",
      tossWinner: "",
      tossDecision: "",
      result: "",
      winner: ""
    }

    const match = new Match(matchProps)

    const filterYear='2017'

    const sut =new FilterMatchesByYear(match,filterYear)

    //act

    const actual =sut.isValid()


    //assert

    expect(actual).not.toBeTruthy()
  })
   
  it.todo('match')


    
  
})
