import { Match } from "../../../../domain/entities/Match";

export interface ITeamWinsCount{

  execute(matches:Match[]):[string,number][]

}