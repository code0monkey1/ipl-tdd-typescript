import { Match } from '../../../../src/entities/Match';
import { IFilter } from '../../../../src/scenarios/filters/new/index';


export class FilterMatchByYear implements IFilter<Match>{


  filter(arr: Match[]): Match[] {
    throw new Error("Method not implemented.");
  }
  
}