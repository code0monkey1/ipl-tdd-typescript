

export type DeliveryProps={

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
  
}

export class Delivery {

  constructor(private deliveryProps:DeliveryProps){}

}