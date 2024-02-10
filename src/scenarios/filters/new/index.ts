import { Match } from "../../../entities/Match"


export interface IFilter<T>{
    
     execute(arr:T[]):T[]
}


export class FilterMatchByTeamChoosingToField implements IFilter<Match>{

  constructor(private f:IFilter<Match>){}
  execute(arr: Match[]): Match[] {
    
    const filteredMatches = this.f.execute(arr)

    return filteredMatches.filter(m => m.getTossDecision()=='field')
  }
      
        
}

export class FilterMatchByYear implements IFilter<Match>{

  constructor(private year:string){}
  
  execute(arr: Match[]): Match[] {
    return arr.filter( a => a.getYear()==this.year)
  }
  
}