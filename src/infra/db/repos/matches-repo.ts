export type DeliveryProps={

    matchId: string;
    inning: string;
    battingTeam: string;
    bowlingTeam: string;
    over: string;
    ball: string;
    batsman: string;
    bowler: string;
    wideRuns: string;
    byeRuns: string;
    legByeRuns: string;
    noBallRuns: string;
    penaltyRuns: string;
    batsmanRuns: string;
    extraRuns: string;
    totalRuns: string;
  
}

class Delivery {

  constructor(private deliveryProps:DeliveryProps){}

}