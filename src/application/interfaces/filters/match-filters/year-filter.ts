import { Match } from '../../../../domain/entities/Match';
import { IFilter } from '../filter';


class YearFilter implements IFilter<Match> {
  execute(data: Match[]): Match[] {
    throw new Error('Method not implemented.');
  }

}