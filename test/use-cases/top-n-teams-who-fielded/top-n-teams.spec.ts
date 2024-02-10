import { ITopNTeams } from "../../../src/controllers/q1";

export class TopNTeams implements ITopNTeams{
   topN(sortedTeamWins: Map<string, number>,topN:number): [string, number][] {
      
      return Array.from(sortedTeamWins.entries()).slice(0, topN);
   }
   
}


describe('top-n-teams', () => {
  
})
