import { Heap } from 'heap-js';
import { MyHeap } from "../interfaces/data-structures/heap";

type TeamWins =Record<string,number>

class MatchWinnerHeap  implements MyHeap<TeamWins>{
   
  private heapArr:TeamWins[]=[]

  constructor(){}
 
  heapPush(t: TeamWins): void {

     Heap.heappush(this.heapArr,t)
  }
  heapPop(): TeamWins | undefined {
    throw new Error('Method not implemented.');
  }


 
}