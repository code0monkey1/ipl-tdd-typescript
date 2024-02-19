import { Match } from "../../../../domain/entities/Match";
import { IFilter } from "../filter";

export class FieldFirst implements IFilter<Match>{

  constructor(private matches:Match[]){}
  
  execute(): Match[] {
    
    const filteredMatches:Match[]=[]

    return filteredMatches
  }
  
}