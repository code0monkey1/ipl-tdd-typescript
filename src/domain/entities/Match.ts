export enum TossDecision{
  FIELD='field',
  BAT='bat'
}

export enum Result{
  NORMAL="normal",
  TIE='tie'
}

export type MatchProps = {
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


export class Match {
    private matchId: number;
    private season: number;
    private city: string;
    private date: Date;
    private team1: string;
    private team2: string;
    private tossWinner: string;
    private tossDecision: TossDecision;
    private result: Result;
    private winner: string;

    constructor(matchProps: MatchProps) {
        this.matchId = matchProps.matchId;
        this.season = matchProps.season;
        this.city = matchProps.city;
        this.date = matchProps.date;
        this.team1 = matchProps.team1;
        this.team2 = matchProps.team2;
        this.tossWinner = matchProps.tossWinner;
        this.tossDecision = matchProps.tossDecision;
        this.result = matchProps.result;
        this.winner = matchProps.winner;
    }
}