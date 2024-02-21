export interface IHeap<T> {

    heapPush(n:T):void

    heapPop():T|undefined

    heapTop(n:number):T[]|undefined
}

export type HeapComparator<T> = (a: T, b: T) => number
