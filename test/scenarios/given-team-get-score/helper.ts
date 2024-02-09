import { IRepo } from "../../../src/data/interfaces";
import { Match, TMatchProps } from "../../../src/entities/Match";
import { TeamWins } from '../../../src/scenarios/given-team-get-score/index';


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

export const createMatchWithWinnersArray=(winners:string[]):Match[]=>{
     
     const matches:Match[] =[]

     winners.forEach( w => matches.push(createMatchWithWinner(w)))

     return matches
  
}

export const createMatchesRepo=(matches:Match[])=>{

       
    const mockMatchRepo:IRepo<Match> ={
                    data: matches
                  }
    
    return mockMatchRepo

}


export const createTeamWins=(matchRepo:IRepo<Match>)=>{
        
      return new TeamWins(matchRepo)
       
}


