export interface MyHeap<T>{
   heapify( arr :T[]):void
   heapPush(t:T):void
   heapPop():T | undefined
   
}

