import { IRepo } from "../data/interfaces";
import { Match } from "../entities/Match";


class TopNTeamsThatElectedToFieldFirstAfterWinningTossInYear{

          constructor(private matchesRepo:IRepo<Match>,year:string,n:number){
            
            // filter matches by year , field first

            // get all unique team names that chose to field first
                // which will an array of names

            // among the names , choose the ones that have top n wins
                // which will be 


            
           
          }
  
}