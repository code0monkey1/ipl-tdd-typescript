import { IFilter } from "../../../data/interfaces"

export class And implements IFilter{

  constructor(private filters:IFilter[]){}
  isValid(): boolean {
     
     for(let filter of this.filters){
          
           if ( !filter.isValid()) return false
     }
     
    return true
  }

}