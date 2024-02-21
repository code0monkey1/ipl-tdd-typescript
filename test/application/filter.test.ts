import { FilterMatchByAttributes } from '../../src/application/filters/match/FilterMatchByAttributes';
import { Match, Result, TossDecision } from '../../src/application/types';

describe('generic filter', () => {
    
  it("filers as per attributes",()=>{
     
        
            // Example usage
       const tableData: Match[] = [
          { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'Royal Challengers Bangalore', TOSS_DECISION: TossDecision.FIELD, RESULT:Result.NORMAL, WINNER: 'Sunrisers Hyderabad' },
          // Add more data entries here
          { MATCH_ID: 1, SEASON: 2016, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'C', TOSS_DECISION:TossDecision.BAT, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' }
        ];      

        const processor = new FilterMatchByAttributes({ SEASON: 2017, TOSS_DECISION: TossDecision['FIELD']});
        const filteredMatches = processor.execute(tableData);

       expect(filteredMatches).toStrictEqual( [{ MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'Royal Challengers Bangalore', TOSS_DECISION: TossDecision.FIELD, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' }])
      
  
  })

})
