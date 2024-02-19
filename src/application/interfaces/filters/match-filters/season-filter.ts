import { Match } from '../../../../domain/entities/Match';
import { IFilter } from '../filter';


class SeasonFilter implements IFilter<Match> {
  execute(data: Match[]): Match[] {
    throw new Error('Method not implemented.');
  }

}