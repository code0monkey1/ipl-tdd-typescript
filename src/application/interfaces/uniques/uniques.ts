export enum TossDecision{
  FIELD='field',
  BAT='bat'
}

export enum Result{
  NORMAL="normal",
  TIE='tie'
}

export type TableData ={
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


export interface UniqueValuesExtractor<T> {
  getUniqueValues<K extends keyof T>(data: T[], attribute: K): T[K][];
}


