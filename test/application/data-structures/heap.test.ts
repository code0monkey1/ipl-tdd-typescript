import { Heap } from 'heap-js';
const numbers = [2, 3, 7, 5];

// Changes the array elements order into a heap in-place
Heap.heapify(numbers);
console.log(numbers); //> [ 2, 3, 5, 7 ]

// Pushes a new value to the heap
Heap.heappush(numbers, 1);
console.log(numbers); //> [ 1, 2, 5, 7, 3 ]
describe('heap works well', () => {

  it('test',()=>{
     
    //arrange
      
    const numbers = [2, 3, -1, 5];

    // Changes the array elements order into a heap in-place
    Heap.heapify(numbers);
    console.log(numbers); //> [ 2, 3, 5, 7 ]

    // Pushes a new value to the heap
    Heap.heappush(numbers, 1);
    console.log(numbers); //> [ 1, 2, 5, 7, 3 ]

    Heap.heappush(numbers,100)

    console.log(Heap.heappop(numbers))

  })
  
})
