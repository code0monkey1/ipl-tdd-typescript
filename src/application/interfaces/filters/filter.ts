export interface IFilter<F,T>{
  execute(filters:F):T[]
}