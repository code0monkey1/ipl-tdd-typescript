import { Heap } from 'heap-js';
import { HeapComparator, IHeap } from '../interfaces/data-structures/heap';

type WinnerCount = Record<string, number>;

export const topWinners: HeapComparator<WinnerCount> = (a:WinnerCount, b:WinnerCount) => {
          
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
  
export class MyHeap implements IHeap<WinnerCount>{

    private values: WinnerCount[]=[];
    private heap: Heap<WinnerCount>;

    constructor(compare: HeapComparator<WinnerCount>) {
        this.heap = new Heap(compare);
        this.heap.init(this.values);
    }

    init(arr: WinnerCount[]){
         this.values = arr;
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

            if (value) topValues.push(value);
            else break;
            
        }

        return topValues;

    }
}