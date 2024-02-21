import { Match, Result, TossDecision } from '../../src/application/types';
import { UniqueMatchAttributeValues } from '../../src/application/uniques/match/UniqueMatchAttributeValues';


describe('', () => {
  it('test', () => {
    const tableData: Match[] = [
      { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'Royal Challengers Bangalore', TOSS_DECISION: TossDecision.FIELD, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' },
      { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'C', TOSS_DECISION: TossDecision.BAT, RESULT: Result.NORMAL, WINNER: 'Sunrisers Hyderabad' }
      // Add more data entries here
    ];

    const processor = new UniqueMatchAttributeValues();

    const uniqueTossWinners = processor.execute(tableData, 'TOSS_WINNER');

    expect(uniqueTossWinners).toStrictEqual(['Royal Challengers Bangalore', 'C']);
  });
});