import { Match } from "../../../../domain/entities/Match";

export interface ITossWinningTeamsFilter{
  execute(matches:Match[]):string[]
}


