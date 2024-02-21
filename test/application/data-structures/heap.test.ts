import { Heap } from 'heap-js';
const numbers = [2, 3, 7, 5];

// Changes the array elements order into a heap in-place
Heap.heapify(numbers);
console.log(numbers); //> [ 2, 3, 5, 7 ]

// Pushes a new value to the heap
Heap.heappush(numbers, 1);
console.log(numbers); //> [ 1, 2, 5, 7, 3 ]

type WinnerCount = Record<number,string>

interface IHeap<T>{

     heapPush(e:T):void

     heapPop():T|undefined

}

class MyHeap implements IHeap<WinnerCount>{
   
     constructor(private numbers=[] as WinnerCount []){
       Heap.heapify(numbers)
     }
     heapPush(n:WinnerCount){
        Heap.heappush(this.numbers,n)
     }

     heapPop():WinnerCount|undefined{
      return Heap.heappop(this.numbers)
     }

    


}

describe('heap works well', () => {

  it('test',()=>{
     
    //arrange
      
    const heap = new MyHeap([{10:'a'},{1:'b'} ,{2:'c'} ])

    // Changes the array elements order into a heap in-place

    // Pushes a new value to the heap
    heap.heapPush({999:'d'});

    while(heap.heapPop()!==undefined){
    console.log(heap.heapPop())
    }



  })
  
})
