export enum TossDecision{
  FIELD='field',
  BAT='bat'
}

export enum Result{
  NORMAL="normal",
  TIE='tie'
}

type MatchDetails = {
    matchId: number;
    season: number;
    city: string;
    date: Date;
    team1: string;
    team2: string;
    tossWinner: string;
    tossDecision: TossDecision;
    result: Result
    winner: string;
};
