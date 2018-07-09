import * as apiCaller from './apiCaller'
import mockPerson from '../../__mocks__/fetchDataResults'
import mockCrawlData from '../../__mocks__/fetchCrawlResults'
import * as resolvedNestedResults from '../../__mocks__/resolvedNestedResults';

describe('fetchCrawl', () => {

  it('should fetch the crawl data and clean it when it is called', async () => {

    const expectedData = { 
      crawlText: "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere. In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....", 
      date: undefined, 
      title: "Revenge of the Sith" 
    }
    window.fetch = jest.fn().mockImplementation(() => 
                  Promise.resolve({json: () => 
                  Promise.resolve(mockCrawlData)
                  }))
    const actualData = await apiCaller.fetchCrawl(3)

    expect(actualData).toEqual(expectedData)
  })
})

describe('fetchData', () => {

  it('should fetch and clean data when it is called', async () => {
    const mockDataArray = [mockPerson, mockPerson];

    window.fetch = jest.fn().mockImplementation(() =>
                    Promise.resolve({ json: () =>
                    Promise.resolve({ results: mockDataArray })
                  }))
    
    const expected = [{ 
      favorite: false,
      homeworld: undefined,
      index: 0,
      name: "Luke Skywalker",
      population: undefined, 
      species: undefined,
      type: "people" 
    }, 
    { 
      favorite: false, 
      homeworld: undefined, 
      index: 1, 
      name: "Luke Skywalker",
      population: undefined, 
      species: undefined, 
      type: "people" 
    }]

    const actual = await apiCaller.fetchData('people')

    expect(actual).toEqual(expected)
  })
})

describe('fetchHomeworld', () => {

  it('should fetch nested homeworld name', async () => {
    const mockResponse = "Tatooine"
    const url = "https://swapi.co/api/planets/1/"
    const expected = "Tatooine"

    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve(
        {json: () => Promise.resolve({name: mockResponse})}
      )
    )
    const actual = await apiCaller.fetchHomeworld(url)

    expect(actual).toEqual(expected);
  })
})

describe('fetchPopulation', () => {

  it('should fetch the nested population', async () => {
    const mockResponse = "200000"
    const url = "https://swapi.co/api/planets/1/"
    const expected = "200000"

    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve(
        { json: () => Promise.resolve({ population: mockResponse }) }
      )
    )
    const actual = await apiCaller.fetchPopulation(url)

    expect(actual).toEqual(expected);
  })
})

describe('fetchSpecies', () => {

  it('should fetch the nested species name', async () => {
    const mockResponse = "Human"
    const url = "https://swapi.co/api/people/1/"
    const expected = "Human"

    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve(
        { json: () => Promise.resolve({ name: mockResponse }) }
      )
    )
    const actual = await apiCaller.fetchSpecies(url)

    expect(actual).toEqual(expected);
  })
})

describe('resolveResidents', () => {

  it('should fetch the name of a resident', async () => {
    const mockResponse = "Luke Skywalker"
    const url = "https://swapi.co/api/planets/1/"
    const expected = "Luke Skywalker"

    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve(
        { json: () => Promise.resolve({ name: mockResponse }) }
      )
    )
    const actual = await apiCaller.resolveResidents(url)

    expect(actual).toEqual(expected);
  })
})