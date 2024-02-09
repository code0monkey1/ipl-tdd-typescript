import { MappedTeamWins, SortedTeamWins, TopNTeamWins, TopNWinningTeams } from "../controllers/q1";
import { UniqueTossWinningTeams } from "../scenarios/unique-toss-winning-team-names";


export const createTopWinningTeams=(topN:number)=>{

   const uniqueTossWinningTeams= new UniqueTossWinningTeams()
   const mappedTeamWins=new MappedTeamWins()
   const sortedTeamWins = new SortedTeamWins()
   const topNTeamWins =  new TopNTeamWins()

   return  new TopNWinningTeams(
                                topN,
                                uniqueTossWinningTeams,
                                mappedTeamWins,
                                sortedTeamWins,
                                topNTeamWins)


}