import { IRepo } from "../../../src/data/interfaces"
import { Match, TMatchProps } from "../../../src/entities/Match"
import { ITeamWins } from "../../../src/scenarios/given-team-get-score"


class TeamWins implements ITeamWins{

  constructor(private matchRepo:IRepo<Match>){}
  
  getCount(team: string): number {

      return this.matchRepo.data.reduce((tot,match)=>{ 

          if(match.getWinningTeam()==team) tot+=1
          
          return tot
    
      },0)
  }
  
}

describe('given-team-get-score', () => {
   
    describe('winCount', () => {


      describe('no matches', () => {
          
           it('returns zero',()=>{
             
              //arrange

            const matchRepo= createMatchesRepo([])

            const sut = createTeamWins(matchRepo)
   
            const expected= 0
   
            //act
   
            const actual = sut.getCount('a')
   
            //assert
   
            expect(actual).toBe(expected)
  
           })
      })
      

       describe('single match', () => {

        describe('single team', () => {
          
          it.each([{winningTeam:'a'},
                   {winningTeam:'b'},
                   {winningTeam:'c'},
                  ])
                  ('winningTeam: $winningTeam has 1 win' ,({winningTeam})=>{
   
            //arrange
            
            const matchWinners = createMatchWithWinnersArray([winningTeam])
        
            const matchRepo:IRepo<Match> = createMatchesRepo(matchWinners)
   
            const sut = createTeamWins(matchRepo)
   
            const expected= 1
   
            //act
   
            const actual = sut.getCount(winningTeam)
  
            //assert
   
            expect(actual).toBe(expected)
   
          })
       
        })
      
       })

       describe('multiple matches', () => {

         it.each([
          { matches:['a','b','b','b'],team:'b',wins:3},
         { matches:['a','b','b','b'],team:'a',wins:1},
         { matches:['a','c','c','b'],team:'c',wins:2},
          { matches:['a','c','c','b'],team:'d',wins:0}
        ])
                  ( "In matches:$matches , team : $team has wins: $wins",({matches,team,wins})=>{
           
                  //arrange

                  const matchWinners:Match[] =createMatchWithWinnersArray(matches)
         
                  const matchRepo:IRepo<Match> =createMatchesRepo(matchWinners)
         
                  const sut = createTeamWins(matchRepo)
         
                  const expected= wins
         
                  //act
         
                  const actual = sut.getCount(team)
         
                  //assert
         
                  expect(actual).toBe(expected)
             
         })
    
       }) 
      
    })
  
})

const createMatchWithWinner=(winner:string)=>{
    
     const matchAProps:TMatchProps={
       
                    matchId: "",
                    season: "",
                    city: "",
                    date: "",
                    team1: "",
                    team2: "",
                    tossWinner: "a",
                    tossDecision: "a",
                    result: "normal",
                    winner
                  }

    return new Match(matchAProps)

}

const createMatchWithWinnersArray=(winners:string[]):Match[]=>{
     
     const matches:Match[] =[]

     winners.forEach( w => matches.push(createMatchWithWinner(w)))

     return matches
  
}

const createMatchesRepo=(matches:Match[])=>{

       
    const mockMatchRepo:IRepo<Match> ={
                    data: matches
                  }
    
    return mockMatchRepo

}


const createTeamWins=(matchRepo:IRepo<Match>)=>{
        
      return new TeamWins(matchRepo)
       
}
