import { Heap } from 'heap-js';
import { IHeap } from '../interfaces/data-structures/heap';


type TeamWins =Record<string,number>

export class MatchWinnerHeap  implements IHeap<TeamWins>{
   
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