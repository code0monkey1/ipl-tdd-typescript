import { Result, TableData, TossDecision, UniqueValuesExtractor } from '../../../src/application/interfaces/uniques/uniques';

export class TableDataProcessor implements UniqueValuesExtractor<TableData> {

  constructor() {}

  getUniqueValues<K extends keyof TableData>(data: TableData[], attribute: K): TableData[K][] {
    const uniqueValues = [...new Set(data.map(item => item[attribute]))];
    return uniqueValues;
  }
}

describe('', () => {
    it('test',()=>{

      // Example usage
    const tableData: TableData[] = [
      { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'Royal Challengers Bangalore', TOSS_DECISION: TossDecision.FIELD, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' },
      { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'C', TOSS_DECISION: TossDecision.BAT, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' }
      // Add more data entries here
    ];

      const processor = new TableDataProcessor()

      const uniqueTossWinners = processor.getUniqueValues(tableData, 'TOSS_WINNER');

      expect(uniqueTossWinners).toStrictEqual(['Royal Challengers Bangalore', 'C'])
      
        }
        )

     

    })
