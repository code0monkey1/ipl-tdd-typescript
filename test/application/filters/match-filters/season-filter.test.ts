import { Match } from '../../../../src/domain/entities/Match';
import { createMatchWith, createSeasonFilter } from './helpers';

describe('season-filter', () => {

  describe('execute', () => {

    describe('has matches with season year', () => {

      it('returns a list of matches with the given season',()=>{

        //arrange
        const filterYear=2017
        const sut = createSeasonFilter(filterYear)

     
        const match1 = createMatchWith({season:2017})

        const match2 = createMatchWith({season:2016})

        const matches= [ match1,match2]

        const expected = [match1]
        //act
        const actual = sut.execute(matches)

        //assert
       
        expect(actual).toStrictEqual(expected)

      })
        
    })

    describe('has no matches with the given season year', () => {

      it('returns an empty array',()=>{

        //arrange
        
        const filterYear=2018

        const sut = createSeasonFilter(filterYear)

        const match1 = createMatchWith({season:2017})
        const match2 = createMatchWith({season:2016})
        
        const matches= [ match1,match2 ]

        const expected:Match[]= []
        //act
        const actual = sut.execute(matches)

        //assert
       
        expect(actual).toStrictEqual(expected)

      })
      
    })

    describe('when an empty matches array is provided', () => {

      it('returns an empty array',()=>{

        //arrange

        const sut = createSeasonFilter(2018)
        const matches:Match[]= [ ]

        const expected:Match[]= []

        //act
        const actual = sut.execute(matches)

        //assert
        expect(actual).toStrictEqual(expected)

      })
      
    })

  })
  
  
})
