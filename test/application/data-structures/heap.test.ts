import { Heap } from 'heap-js';

type WinnerCount = Record<number,string>

export type Comparator<T> = (a: T, b: T) => number;

interface IHeap<T>{

     heapPush(e:T):void

     heapPop():T|undefined

}

class MyHeap implements IHeap<string>{
   
     constructor(private numbers=[] as string []){
       
       Heap.heapify(numbers)
     }
     heapPush(n:string){
        Heap.heappush(this.numbers,n)
     }

     heapPop():string|undefined{
      return Heap.heappop(this.numbers)
     }



}

describe('heap works well', () => {

  it('test',()=>{
     
    //arrange
      
    const heap = new MyHeap(['d','c','a','b','e'])

    // Changes the array elements order into a heap in-place

    // Pushes a new value to the heap
    heap.heapPush('f');
   
    let v = heap.heapPop()

    while(v!==undefined){
       console.log(v)
       v= heap.heapPop()
    }

  })
  
})
