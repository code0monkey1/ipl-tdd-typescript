import { Heap } from 'heap-js';
import { MyHeap } from "../interfaces/data-structures/heap";

type TeamWins =Record<string,number>

class MatchWinnerHeap extends Heap<TeamWins>{
  
  private arr: TeamWins[] = [] as TeamWins[]


  heapPush(e: TeamWins): void {
    Heap.heappush(this.arr,e)
  }
  
  heapPop(): TeamWins |undefined {
    
   return Heap.heappop(this.arr)
  }
  
}