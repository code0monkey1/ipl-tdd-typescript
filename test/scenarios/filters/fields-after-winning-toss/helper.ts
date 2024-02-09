import { MatchTeamFieldsAfterWinningToss } from "../../../../src/scenarios/filters/fields-after-winning-toss"
import { createMatch } from "../filter-matches-by-year/helper"

  export const createMatchTeamFieldsAfterWinningToss=(tossDecision:string)=>{
          
          const match = createMatch({tossDecision})
         return new MatchTeamFieldsAfterWinningToss(match)

    }