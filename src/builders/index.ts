
import { IMappedTeamWins, ISortedTeamWins, ITopNTeamWins } from "../controllers/q1";
import { IUniqueTossWinningTeams } from "../scenarios/unique-toss-winning-team-names";

class TopWinningTeamsBuilder{
    
     constructor(
      private topN: number, 
      private uniqueTossWinningTeams: IUniqueTossWinningTeams,
      private mappedTeamWins: IMappedTeamWins,
      private  sortedTeamWins: ISortedTeamWins,
      private   topNTeamWins: ITopNTeamWins){}

     
}