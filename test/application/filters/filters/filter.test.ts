
import { TableDataFilter } from '../../../../src/application/interfaces/filters/filter';
import { Result, TableData, TossDecision } from '../../../../src/application/interfaces/uniques/uniques';

describe('generic filter', () => {
    
  it("filers as per attributes",()=>{
     
        
            // Example usage
       const tableData: TableData[] = [
          { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'Royal Challengers Bangalore', TOSS_DECISION: TossDecision.FIELD, RESULT:Result.NORMAL, WINNER: 'Sunrisers Hyderabad' },
          // Add more data entries here
          { MATCH_ID: 1, SEASON: 2016, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'C', TOSS_DECISION: TossDecision.BAT, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' }
        ];      

        const processor = new TableDataFilter();
        const filteredMatches = processor.filterEntries(tableData, { SEASON: 2017, TOSS_DECISION: TossDecision.FIELD});

       expect(filteredMatches).toStrictEqual( [{ MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'Royal Challengers Bangalore', TOSS_DECISION: TossDecision.FIELD, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' }])
      
  
  })

})
