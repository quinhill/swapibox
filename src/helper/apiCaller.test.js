import * as apiCaller from './apiCaller'
import mockPerson from '../../__mocks__/fetchDataResults'

describe('fetchCrawl', () => {

  it('should fetch the crawl data and clean it when it is called', async () => {
    const mockCrawlData = {
      title: "Revenge of the Sith", episode_id: 3, opening_crawl: "War! The Republic is crumbling under attacks by t…ate mission to rescue the captive Chancellor....",
      characters: ["https://swapi.co/api/people/1/", "https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/4/", "https://swapi.co/api/people/5/", "https://swapi.co/api/people/6/", "https://swapi.co/api/people/7/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/11/", "https://swapi.co/api/people/12/", "https://swapi.co/api/people/13/", "https://swapi.co/api/people/20/", "https://swapi.co/api/people/21/", "https://swapi.co/api/people/33/", "https://swapi.co/api/people/46/", "https://swapi.co/api/people/51/", "https://swapi.co/api/people/52/", "https://swapi.co/api/people/53/", "https://swapi.co/api/people/54/", "https://swapi.co/api/people/55/", "https://swapi.co/api/people/56/", "https://swapi.co/api/people/58/", "https://swapi.co/api/people/63/", "https://swapi.co/api/people/64/", "https://swapi.co/api/people/67/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/75/", "https://swapi.co/api/people/78/", "https://swapi.co/api/people/79/", "https://swapi.co/api/people/80/", "https://swapi.co/api/people/81/", "https://swapi.co/api/people/82/", "https://swapi.co/api/people/83/", "https://swapi.co/api/people/35/"],
      created: "2014-12-20T18:49:38.403000Z",
      director: "George Lucas",
      edited: "2015-04-11T09:45:44.862122Z",
      episode_id: 3, 
      opening_crawl: "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere. In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....",
    }

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

    const mockResolvedNested = jest.fn()
    const mockCleanSort = jest.fn()
    
    const mockDataArray = [mockPerson, mockPerson];

    window.fetch = jest.fn().mockImplementation(() =>
                    Promise.resolve({ json: () =>
                    Promise.resolve({ results: mockDataArray })
                  }))
    
    apiCaller.resolveNested = mockResolvedNested
    apiCaller.cleanSort = mockCleanSort
    
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