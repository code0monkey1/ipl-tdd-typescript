import { Match } from "../../../entities/Match";

export interface IFilter{
    
       isValid():boolean 
}

export class MatchInYear implements IFilter{

    constructor(private match:Match[]){

      
    }

  isValid(): boolean {
    throw new Error("Method not implemented.");
  }

}