import { Heap } from 'heap-js';
import { IHeap } from '../interfaces/data-structures/heap';


type TeamWins =Record<string,number>

// export class MatchWinnerHeap  implements IHeap<TeamWins>{
   
//   constructor(private heapArr:TeamWins[] =[]){

//      Heap.heapify(this.heapArr)
//   }
//   init(arr: TeamWins[]): void {
//     throw new Error('Method not implemented.');
//   }
 
//   heapPush(t: TeamWins): void {

//      Heap.heappush(this.heapArr,t)
//   }
//   heapPop(): TeamWins | undefined {
  
//     return  Heap.heappop(this.heapArr)
      
//   }
//   heapTop(){
    
//     return Heap.heaptop(this.heapArr)
//   }
 
// }

// class MyHeap implements IHeap<WinnerCount>{

//     private values: WinnerCount[]=[];
//     private heap: Heap<WinnerCount>;

//     constructor(compare: HeapComparator<WinnerCount>) {
//         this.heap = new Heap(compare);
//         this.heap.init(this.values);
//     }

//     init(arr: WinnerCount[]){
//          this.values = arr;
//          this.heap.init(this.values);
//     }

//     heapPush(n: WinnerCount) {
//         this.heap.add(n);
//     }

//     heapPop(): WinnerCount | undefined {
//         return this.heap.pop();
//     }

//     heapTop(n:number):WinnerCount[]|undefined{

//         const topValues: WinnerCount[] = [];

//         for (let i = 0; i < n; i++) {
//             const value = this.heap.pop();
//             if (value) {
//                 topValues.push(value);
//             } else {
//                 break;
//             }
//         }
//         return topValues;

//     }
// }
