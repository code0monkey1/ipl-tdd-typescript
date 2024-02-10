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

describe.only('map-team-win-count', () => {


      describe('execute', () => { 
       
              
              describe('single team', () => {

                   
                  it('a team has 0 wins',()=>{
                      
                        //arrange 
                        const sut = new MapTeamWinCount()

                        const teamNames =new Set(['a'])

                        const matches= [createMatch({winner:'b'})]
                        
                        const expected = new Map([['a',0]])

                        //act
                        const actual =sut.execute(teamNames,matches)
                         
                        //assert
                        expect(actual).toStrictEqual(expected)

                  })

                  it('a team has 1 win count',()=>{

                        //arrange 
                        const sut = new MapTeamWinCount()

                        const teamNames =new Set(['a'])

                        const matches= [createMatch({winner:'a'})]
                        
                        const expected = new Map([['a',1]])

                        //act
                        const actual =sut.execute(teamNames,matches)
                         
                        //assert
                        expect(actual).toStrictEqual(expected)

                        
                  })
                
              })

              describe('multiple teams', () => {
                    
                    describe('each team has 1 count', () => {

                              //arrange 
                        const sut = new MapTeamWinCount()

                        const teamNames =new Set(['a','b'])

                        const matches= [createMatch({winner:'a'}),
                                          createMatch({winner:'b'})]
                        
                        const expected = new Map([['a',1],['b',1]])

                        //act
                        const actual =sut.execute(teamNames,matches)
                         
                        //assert
                        expect(actual).toStrictEqual(expected)
                      
                    })
                    
              })
              
              
           
      })
      
  
})
