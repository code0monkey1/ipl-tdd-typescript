export type DeliveryProps = {
  matchId: number;
  inning: number;
  battingTeam: string;
  bowlingTeam: string;
  over: number;
  ball: number;
  batsman: string;
  bowler: string;
  wideRuns: number;
  byeRuns: number;
  legByeRuns: number;
  noBallRuns: number;
  penaltyRuns: number;
  batsmanRuns: number;
  extraRuns: number;
  totalRuns: number;
};

export class Delivery {
  private readonly matchId: number;
  private readonly inning: number;
  private readonly battingTeam: string;
  private readonly bowlingTeam: string;
  private readonly over: number;
  private readonly ball: number;
  private readonly batsman: string;
  private readonly bowler: string;
  private readonly wideRuns: number;
  private readonly byeRuns: number;
  private readonly legByeRuns: number;
  private readonly noBallRuns: number;
  private readonly penaltyRuns: number;
  private readonly batsmanRuns: number;
  private readonly extraRuns: number;
  private readonly totalRuns: number;

  constructor(deliveryProps: DeliveryProps) {
    this.matchId = deliveryProps.matchId;
    this.inning = deliveryProps.inning;
    this.battingTeam = deliveryProps.battingTeam;
    this.bowlingTeam = deliveryProps.bowlingTeam;
    this.over = deliveryProps.over;
    this.ball = deliveryProps.ball;
    this.batsman = deliveryProps.batsman;
    this.bowler = deliveryProps.bowler;
    this.wideRuns = deliveryProps.wideRuns;
    this.byeRuns = deliveryProps.byeRuns;
    this.legByeRuns = deliveryProps.legByeRuns;
    this.noBallRuns = deliveryProps.noBallRuns;
    this.penaltyRuns = deliveryProps.penaltyRuns;
    this.batsmanRuns = deliveryProps.batsmanRuns;
    this.extraRuns = deliveryProps.extraRuns;
    this.totalRuns = deliveryProps.totalRuns;
  }
}