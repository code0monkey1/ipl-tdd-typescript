import { Comparator, Heap } from 'heap-js';

type WinnerCount = Record<number, string>;

class MyHeap<T> {
    private numbers: T[];
    private heap: Heap<T>;

    constructor(numbers: T[], compare: Comparator<T>) {
        this.numbers = numbers;
        this.heap = new Heap(compare);
        this.heap.init(this.numbers);
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
        const compareWinnerCount: Comparator<WinnerCount> = (a, b) => {
            // Custom comparison logic for WinnerCount type
            // Implement your comparison logic here
            return 0; // Placeholder return value
        };

        const heap = new MyHeap<WinnerCount>([{ 1: 'a' }, { 2: 'b' }, { 3: 'c' }], compareWinnerCount);

        // Pushes a new value to the heap
        heap.heapPush({ 4: 'd' });

        let v = heap.heapPop();

        while (v !== undefined) {
            console.log(v);
            v = heap.heapPop();
        }
    });
});