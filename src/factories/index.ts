import { MapTeamWinCount, SortedTeamWins, TeamWinCountMap, TopNTeams, TopNWinningTeams } from "../controllers/q1";
import { FilterMatchByTeamChoosingToField, FilterMatchByYear } from "../scenarios/filters/new";
import { UniqueTossWinningTeams } from "../scenarios/unique-toss-winning-team-names";


export const createTopWinningTeams=(topN:number)=>{
 
  const topNTeamWins =  new TopNTeams()
  const teamWinCountMap = createTeamWinCountMap()
  const sortedTeamWins = new SortedTeamWins()


   return  new TopNWinningTeams(topN,teamWinCountMap,sortedTeamWins,topNTeamWins)

}

export const createTeamWinCountMap =()=>{

  const teamWinCountMap = new TeamWinCountMap(
  new UniqueTossWinningTeams(),
  new MapTeamWinCount())

  return teamWinCountMap
}

export const createMatchFilters=(year:string)=>{

    const filterMatchByYear = new FilterMatchByYear(year)

       return  new FilterMatchByTeamChoosingToField(filterMatchByYear)
}
