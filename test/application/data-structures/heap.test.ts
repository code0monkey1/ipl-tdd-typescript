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

interface IHeap<T> {

    heapPush(n:T):void

    heapPop():T|undefined

    heapTop():T[]|undefined
}

class MyHeap implements IHeap<WinnerCount>{

    private values: WinnerCount[];
    private heap: Heap<WinnerCount>;

    constructor(numbers: WinnerCount[], compare: Comparator<WinnerCount>) {
        this.values = numbers;
        this.heap = new Heap(compare);
        this.heap.init(this.values);
    }

    heapPush(n: WinnerCount) {
        this.heap.add(n);
    }

    heapPop(): WinnerCount | undefined {
        return this.heap.pop();
    }

    heapTop():WinnerCount[]{
       return this.heap.top()
    }
}


describe('heap works well', () => {
    it('test', () => {
        // arrange
     

        const heap = new MyHeap([{  'a':4 }, {  'b':3 }, {  'c':3 }], compareWinnerCount);

        // Pushes a new value to the heap
        heap.heapPush({'d':1 });

        let v = heap.heapPop();

        console.log("Heap top",heap.heapTop())

        while (v !== undefined) {
            console.log(v);
            v = heap.heapPop();
        }
    });
});