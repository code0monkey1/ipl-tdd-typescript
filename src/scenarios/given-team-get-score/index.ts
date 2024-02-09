import { IRepo } from "../../data/interfaces"
import { Match } from "../../entities/Match"

export interface ITeamWins {
      
     getCount(team:string):number
      
}

export class TeamWins implements ITeamWins{

  constructor(private matchRepo:IRepo<Match>){}
  
  getCount(team: string): number {

      return this.matchRepo.data.reduce((tot,match)=>{ 

          if(match.getWinningTeam()==team) tot+=1
          
          return tot
    
      },0)
  }
  
}