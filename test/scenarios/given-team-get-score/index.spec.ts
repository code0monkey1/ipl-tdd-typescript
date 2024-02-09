import { IRepo } from "../../../src/data/interfaces";
import { Match } from "../../../src/entities/Match";
import { createMatchWithWinnersArray, createMatchesRepo, createTeamWins } from "./helper";



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



