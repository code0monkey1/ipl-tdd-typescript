import { Heap } from 'heap-js';
import { MyHeap } from "../interfaces/data-structures/heap";

type TeamWins =Record<string,number>

class MatchWinnerHeap extends Heap<TeamWins> implements MyHeap<TeamWins>{
  heapPush(t: TeamWins): void {
    throw new Error('Method not implemented.');
  }
  heapPop(): TeamWins | undefined {
    throw new Error('Method not implemented.');
  }


 
}