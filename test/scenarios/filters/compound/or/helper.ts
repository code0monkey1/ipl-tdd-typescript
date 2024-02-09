import { IFilter } from "../../../../../src/data/interfaces"
import { Or } from "./index.spec"

export const createOrFilter=(filters:IFilter[])=>{

    return new Or(filters)
}