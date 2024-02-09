import { TeamFieldsAfterWinningToss } from "../../../../src/scenarios/filters/fields-after-winning-toss"
import { createMatch } from "../filter-matches-by-year/helper"

  export const createTeamFieldsAfterWinningToss=(tossDecision:string)=>{
          
          const match = createMatch({tossDecision})
         return new TeamFieldsAfterWinningToss(match)

    }