import { Match } from '../../../../domain/entities/Match';
import { IFilter } from '../filter';


export class SeasonFilter implements IFilter<Match> {
  constructor(private year:number){}
  execute(data: Match[]): Match[] {
     return data.filter( m => m.getSeason()===this.year)
  }

}