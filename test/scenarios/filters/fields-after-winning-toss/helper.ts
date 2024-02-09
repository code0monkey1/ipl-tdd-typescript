import { Match } from "../../../../src/entities/Match"
import { MatchTeamFieldsAfterWinningToss } from "../../../../src/scenarios/filters/fields-after-winning-toss"

  export const createMatchTeamFieldsAfterWinningToss=(match:Match)=>{
          
         return new MatchTeamFieldsAfterWinningToss(match)

    }