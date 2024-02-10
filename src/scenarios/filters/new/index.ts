import { Match } from "../../../entities/Match"


export interface IFilter<T>{
    
     filter(arr:T[]):T[]
}


export class FilterMatchByTeamChoosingToField implements IFilter<Match>{

  constructor(private f:IFilter<Match>){}
  filter(arr: Match[]): Match[] {
    
    const filteredMatches = this.f.filter(arr)

    return filteredMatches.filter(m => m.getTossDecision()=='field')
  }
      
        
}

export class FilterMatchByYear implements IFilter<Match>{

  constructor(private year:string){}
  
  filter(arr: Match[]): Match[] {
    return arr.filter( a => a.getYear()==this.year)
  }
  
}