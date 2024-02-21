export type TableData ={
  MATCH_ID: number;
  SEASON: number;
  CITY: string;
  DATE: string;
  TEAM1: string;
  TEAM2: string;
  TOSS_WINNER: string;
  TOSS_DECISION: string;
  RESULT: string;
  WINNER: string;
}

export interface UniqueValuesExtractor<T> {
  getUniqueValues<K extends keyof T>(data: T[], attribute: K): T[K][];
}

