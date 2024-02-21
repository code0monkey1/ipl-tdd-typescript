export interface IHeap<T> {

    init(arr: T[]):void

    heapPush(e:T):void

    heapPop():T|undefined

    heapTop(n:number):T[]|undefined
}

export type HeapComparator<T> = (a: T, b: T) => number
