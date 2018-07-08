import * as apiCaller from './apiCaller'

describe('fetchCrawl', () => {

  test('it should fetch the crawl data and clean it when it is called', async () => {
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

  const mockResolvedNested = jest.fn()
  const mockCleanSort = jest.fn()

  it('should fetch and clean data when it is called', async () => {
    const mockPerson = {
      birth_year:"19BBY",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      eye_color: "blue",
      films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
      gender: "male",
      hair_color:"blond",
      height: "172",
      homeworld: "https://swapi.co/api/planets/1/",
      mass:"77",
      name:"Luke Skywalker",
      skin_color
      :"fair",
      species:["https://swapi.co/api/species/1/"],
      starships:["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],url: "https://swapi.co/api/people/1/"
    }
    const mockDataArray = [mockPerson, mockPerson];

    window.fetch = jest.fn().mockImplementation(() =>
                    Promise.resolve({ json: () =>
                    Promise.resolve(mockDataArray)
                  }))
    
    apiCaller.resolveNested = mockResolvedNested
    apiCaller.cleanSort = mockCleanSort
    // const expected = {
    //   name: "Luke Skywalker",
    //   homeworld: "Alderaan",
    //   species: "human",
    //   population: 200000000,
    //   favorite: false,
    //   type: 'people'
    // }
    const actual = await apiCaller.fetchData('people')
    console.log(actual)

    expect(actual).toEqual(expected)
  })
})