
import { UniqueValuesExtractor } from '../../../src/application/interfaces/uniques/uniques';
import { Match, Result, TossDecision } from '../../../src/application/types';

export class TableDataProcessor implements UniqueValuesExtractor<Match> {
  constructor() {}

  getUniqueValues<K extends keyof Match>(data: Match[], attribute: K): Match[K][] {
    const uniqueValues = [...new Set(data.map(item => item[attribute]))];
    return uniqueValues;
  }
}

describe('', () => {
  it('test', () => {
    const tableData: Match[] = [
      { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'Royal Challengers Bangalore', TOSS_DECISION: TossDecision.FIELD, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' },
      { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'C', TOSS_DECISION: TossDecision.BAT, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' }
      // Add more data entries here
    ];

    const processor = new TableDataProcessor();

    const uniqueTossWinners = processor.getUniqueValues(tableData, 'TOSS_WINNER');

    expect(uniqueTossWinners).toStrictEqual(['Royal Challengers Bangalore', 'C']);
  });
});