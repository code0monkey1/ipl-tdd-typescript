import { Match } from "../../../../domain/entities/Match";
import { IFilter } from "../filter";

export class WinTossFilter implements IFilter<Match>{
  execute(): Match[] {
    throw new Error("Method not implemented.");
  }
  
}