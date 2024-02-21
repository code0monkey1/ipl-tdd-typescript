import Heap from 'heap-js';
import { MyHeap } from '../../../src/application/interfaces/data-structures/heap';


type TeamWins =Record<string,number>

export class MatchWinnerHeap  implements MyHeap<TeamWins>{
   
  constructor(private heapArr:TeamWins[] =[]){

     Heap.heapify(this.heapArr)
  }
 
  heapPush(t: TeamWins): void {

     Heap.heappush(this.heapArr,t)
  }
  heapPop(): TeamWins | undefined {
  
    return  Heap.heappop(this.heapArr)
      
  }
  heapTop(){
    
    return Heap.heaptop(this.heapArr)
  }
 
}