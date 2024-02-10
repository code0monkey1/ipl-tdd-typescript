
import { FilterMatchByTeamChoosingToField, FilterMatchByYear } from "../scenarios/filters/new";

export const createMatchFilters=(year:string)=>{

    const filterMatchByYear = new FilterMatchByYear(year)

       return  new FilterMatchByTeamChoosingToField(filterMatchByYear)
}
