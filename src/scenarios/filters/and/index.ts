import { IFilter } from "../../../data/interfaces"

export class And implements IFilter{

  constructor(private filters:IFilter[]){}
  isValid(): boolean {
     
    return this.filters.every( f=> f.isValid() )
    
  }

}