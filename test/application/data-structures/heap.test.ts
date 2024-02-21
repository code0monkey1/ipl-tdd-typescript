import Heap from 'heap-js';
export interface MyHeap<T>{
   heapPush(t:T):void
   heapPop():T | undefined
   
}


type TeamWins =Record<number,string>

export class MatchWinnerHeap  implements MyHeap<TeamWins>{
   private heapArr=[] as TeamWins[]

   constructor(heapArr?:TeamWins[]){
    
   if(heapArr)this.heapArr = heapArr
   
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

describe('heap works well', () => {

  it('test',()=>{
     
    //arrange
    const matchWins:TeamWins[] = [{9:'two'},{20:'one'},{3:'three'}]

   const sut = new MatchWinnerHeap(matchWins)

   const expected = {3:'three'}
    //act

   const actual=sut.heapTop()

    //assert
  
    expect(actual).toBe(expected)


  })
  
})
