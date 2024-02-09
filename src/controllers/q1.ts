import { IRepo } from "../data/interfaces";
import { Match } from "../entities/Match";


class TopNTeamsThatElectedToFieldFirstAfterWinningTossInYear{

          constructor(private matchesRepo:IRepo<Match>,year:string,n:number){


          }
  
}