import { Heap } from 'heap-js';
import { HeapComparator, IHeap } from '../../../src/application/interfaces/data-structures/heap';

const topWinners: HeapComparator<WinnerCount> = (a:WinnerCount, b:WinnerCount) => {
          
            const keyA = Object.values(a)[0]; // Get the key of object a
            const keyB = Object.values(b)[0]; // Get the key of object b

            // Compare the keys as numbers
            if (keyA > keyB) {
                return -1;
            } else if (keyA < keyB) {
                return 1;
            } else {
                return 0;
            }

  };

type WinnerCount = Record<string, number>;


class MyHeap implements IHeap<WinnerCount>{

    private values: WinnerCount[];
    private heap: Heap<WinnerCount>;

    constructor(arr: WinnerCount[]=[], compare: HeapComparator<WinnerCount>) {
        this.values = arr;
        this.heap = new Heap(compare);
        this.heap.init(this.values);
    }

    heapPush(n: WinnerCount) {
        this.heap.add(n);
    }

    heapPop(): WinnerCount | undefined {
        return this.heap.pop();
    }

    heapTop(n:number):WinnerCount[]|undefined{

        const topValues: WinnerCount[] = [];

        for (let i = 0; i < n; i++) {
            const value = this.heap.pop();
            if (value) {
                topValues.push(value);
            } else {
                break;
            }
        }
        return topValues;

    }
}


describe('heap works well', () => {

    it('test', () => {
        // arrange
     
      const heap = new MyHeap([{  'b':3 },{  'a':4 }, {  'c':3 }], topWinners);

        // Pushes a new value to the heap
      heap.heapPush({'d':1 });
      

       let v = heap.heapPop()!;

       console.log(v)

       heap.heapPush(v)

       let c = heap.heapTop(3)

       expect(c).toStrictEqual( [ { a: 4 }, { b: 3 }, { c: 3 } ])
       
    });
});