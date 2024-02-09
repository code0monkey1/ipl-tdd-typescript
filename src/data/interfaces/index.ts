export interface IRepo<T>{
  data:T[]
}
export interface IFilter{
    isValid():boolean
}