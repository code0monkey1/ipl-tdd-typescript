export interface IFilter<T>{

  execute(data:T[]):T[]
  
}