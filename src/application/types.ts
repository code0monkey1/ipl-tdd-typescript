export enum TossDecision {
  FIELD = 'field',
  BAT = 'bat'
}
export enum Result {
  NORMAL = 'normal',
  TIE = 'tie'
}

export type Match ={
  MATCH_ID: number;
  SEASON: number;
  CITY: string;
  DATE: string;
  TEAM1: string;
  TEAM2: string;
  TOSS_WINNER: string;
  TOSS_DECISION: TossDecision;
  RESULT: Result;
  WINNER: string;
}

