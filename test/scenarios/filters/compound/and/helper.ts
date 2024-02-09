import { IFilter } from "../../../../../src/data/interfaces"
import { And } from "../../../../../src/scenarios/filters/and"

export const createAnd=(filters:IFilter[])=>{
    
    return new And(filters)

}
