import { ITeamWinsCount } from '../../../../src/application/interfaces/filters/team-filters/team-wins-count-filter';
import { Match } from '../../../../src/domain/entities/Match';

class TeamWinsCount implements ITeamWinsCount{
  execute(matches: Match[]): [string, number][] {
    throw new Error('Method not implemented.');
  }

}


describe('team-wins-count-filter', () => {
  
})
