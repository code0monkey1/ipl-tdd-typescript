export interface IFilter<T>{

  execute(data:T[]):T[]
  
}


export interface IFilter1<F,T>{
  execute(filters:F):T[]
}