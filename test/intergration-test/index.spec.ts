import { TopNWinningTeams } from "../../src/controllers/q1"
import { IRepo } from "../../src/data/interfaces"
import { Match } from "../../src/entities/Match"
import { IFilter } from "../../src/scenarios/filters/new"

export class TopTeamsUseCase{

          constructor(
            private matchesRepo:IRepo<Match>,
            private matchFilter:IFilter<Match>,
            private topNTeams:TopNWinningTeams
            ){}

          execute(){
                
            const matches = this.matchesRepo.data

            // filter matches by year , and choose to field first
            const filteredMatches = this.matchFilter.execute(matches)

            return this.topNTeams.execute(filteredMatches)
   
          }
}

describe('top-teams-user-case', () => {

     
     describe('execute', () => {

        
       
     })
     
  
})
