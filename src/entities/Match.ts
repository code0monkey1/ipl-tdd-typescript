export type TMatchProps = {
  matchId: string;
  season: string;
  city: string;
  date: string;
  team1: string;
  team2: string;
  tossWinner: string;
  tossDecision: string;
  result: string;
  winner: string;
};

export class Match {
  private readonly matchId: string;
  private readonly season: string;
  private readonly city: string;
  private readonly date: string;
  private readonly team1: string;
  private readonly team2: string;
  private readonly tossWinner: string;
  private readonly tossDecision: string;
  private readonly result: string;
  private readonly winner: string;

  constructor(matchProps: TMatchProps) {
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


  public getWinningTeam():string{
       
       return this.winner
  }

  public getYear(){
      
       return this.season
  }

  public getTossDecision(){
    return this.tossDecision
  }

  public getTossWinner():string{
     return this.tossWinner
  }
}