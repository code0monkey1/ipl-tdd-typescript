import { createFilterMatchByYear, createMatch } from './helper';

describe('filter-matches-by-year', () => {
  
  it('no match',()=>{


    //arrange

    const match = createMatch({season:'2016'})

    const filterYear='2017'

    const sut =createFilterMatchByYear(match,filterYear)

    //act

    const actual =sut.isValid()


    //assert

    expect(actual).not.toBeTruthy()
  })
   
  
  it('match',()=>{


    //arrange

    const match = createMatch({season:'2017'})

    const filterYear='2017'

    const sut =createFilterMatchByYear(match,filterYear)

    //act

    const actual =sut.isValid()


    //assert

    expect(actual).toBeTruthy()
  })
   
  
})
