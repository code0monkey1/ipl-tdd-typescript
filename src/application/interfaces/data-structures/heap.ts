interface IHeap<T> {

    heapPush(n:T):void

    heapPop():T|undefined

    heapTop():T[]|undefined
}
