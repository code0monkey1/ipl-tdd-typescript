import { Heap } from 'heap-js';
const numbers = [2, 3, 7, 5];

// Changes the array elements order into a heap in-place
Heap.heapify(numbers);
console.log(numbers); //> [ 2, 3, 5, 7 ]

// Pushes a new value to the heap
Heap.heappush(numbers, 1);
console.log(numbers); //> [ 1, 2, 5, 7, 3 ]

class MyHeap{
   
     constructor(private numbers=[] as number []){
       Heap.heapify(numbers)
     }
     heapPush(n:number){
        Heap.heappush(this.numbers,n)
     }

     heapPop():number|undefined{
      return Heap.heappop(this.numbers)
     }

     toString(){
      Heap.toString()
     }

}

describe('heap works well', () => {

  it('test',()=>{
     
    //arrange
      
    const heap = new MyHeap([2, 3, -1, 5])

    // Changes the array elements order into a heap in-place
  
    console.log(numbers); //> [ 2, 3, 5, 7 ]

    // Pushes a new value to the heap
    heap.heapPush( 1);
    console.log(numbers); //> [ 1, 2, 5, 7, 3 ]

    heap.heapPush(100)

    console.log(heap.heapPop())

  })
  
})
