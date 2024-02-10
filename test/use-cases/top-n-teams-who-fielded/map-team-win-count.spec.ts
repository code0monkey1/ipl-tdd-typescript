
import { createMatch } from '../../scenarios/filters/filter-matches-by-year/helper';
import { createMapTeamWinCount } from './helper';

describe('map-team-win-count', () => {


      describe('execute', () => { 
       
              
              describe('single team', () => {

                   
                  it('a team has 0 wins',()=>{
                      
                        //arrange 
                        const sut = createMapTeamWinCount()

                        const teamNames =['a']

                        const matches= [createMatch({winner:'b'})]
                        
                        const expected = [['a',0]]

                        //act
                        const actual =sut.execute(teamNames,matches)
                         
                        //assert
                        expect(actual).toStrictEqual(expected)

                  })

                  it('a team has 1 win count',()=>{

                        //arrange 
                        const sut = createMapTeamWinCount()

                        const teamNames =['a']

                        const matches= [createMatch({winner:'a'})]
                        
                        const expected = [['a',1]]

                        //act
                        const actual =sut.execute(teamNames,matches)
                         
                        //assert
                        expect(actual).toStrictEqual(expected)

                        
                  })
                
              })

              describe('multiple teams', () => {
                    
                    describe('each team has 1 count', () => {

                              //arrange 
                        const sut = createMapTeamWinCount()

                        const teamNames =['a','b']

                        const matches= [createMatch({winner:'a'}),
                                          createMatch({winner:'b'})]
                        
                        const expected = [['a',1],['b',1]]

                        //act
                        const actual =sut.execute(teamNames,matches)
                         
                        //assert
                        expect(actual).toStrictEqual(expected)
                      
                    })
                    
              })
              
              
           
      })
      
  
})


