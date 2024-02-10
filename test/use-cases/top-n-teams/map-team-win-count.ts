import { IMappedTeamWins } from '../../../src/controllers/q1';
import { Match } from '../../../src/entities/Match';
import { createMatch } from '../../scenarios/filters/filter-matches-by-year/helper';

export class MapTeamWinCount implements IMappedTeamWins{
   
   execute(teamNames: Set<string>, matches: Match[]): Map<string, number> {

         const team_wins = new Map<string,number>

         teamNames.forEach(t =>  team_wins.set(t,this.getTeamWinCount(t,matches))) 
            
         return team_wins
   }

    private getTeamWinCount(teamName:string,matches:Match[]){

     return matches.reduce((tot,match)=>{ 

               if(match.getWinningTeam()==teamName) tot+=1
               
               return tot
         
            },0)

  
    }
   
}


describe('map-team-win-count', () => {


      describe('execute', () => { 
       
              
              describe('single team', () => {

                  it('a team has 1 win count',()=>{

                        //arrange 
                        const sut = new MapTeamWinCount()

                        const teamName ='a'
                        const matches=createMatch({tossWinner:'a'})

                        //act
                         
                        //assert


                        
                  })
                
              })
              
           
      })
      
  
})
