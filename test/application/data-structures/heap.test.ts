import { Heap } from 'heap-js';

type Comparator<T> = (a: T, b: T) => number

const compareWinnerCount: Comparator<WinnerCount> = (a:WinnerCount, b:WinnerCount) => {
          
           const keyA = Object.values(a)[0]; // Get the key of object a
            const keyB = Object.values(b)[0]; // Get the key of object b

            // Compare the keys as numbers
            if (keyA < keyB) {
                return -1;
            } else if (keyA > keyB) {
                return 1;
            } else {
                return 0;
            }
             
  };
  

type WinnerCount = Record<string, number>;

class MyHeap<T> {

    private values: T[];
    private heap: Heap<T>;

    constructor(numbers: T[], compare: Comparator<T>) {
        this.values = numbers;
        this.heap = new Heap(compare);
        this.heap.init(this.values);
    }

    heapPush(n: T) {
        this.heap.add(n);
    }

    heapPop(): T | undefined {
        return this.heap.pop();
    }
}


describe('heap works well', () => {
    it('test', () => {
        // arrange
     

        const heap = new MyHeap<WinnerCount>([{  'a':4 }, {  'b':3 }, {  'c':3 }], compareWinnerCount);

        // Pushes a new value to the heap
        heap.heapPush({'d':1 });

        let v = heap.heapPop();

        while (v !== undefined) {
            console.log(v);
            v = heap.heapPop();
        }
    });
});