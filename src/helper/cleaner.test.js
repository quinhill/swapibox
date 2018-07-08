import * as cleaner from './cleaner';

describe('cleanSort', () => {

  it('should clean the people objects in the array of data passed in', () => {
    const mockPerson = {
      birth_year:"19BBY",
      created:"2014-12-09T13:50:51.644000Z",
      edited:"2014-12-20T21:17:56.891000Z",
      eye_color:"blue",
      films:["https://swapi.co/api/films/7/"],
      gender:"male",
      hair_color:"blond",
      height:"172",
      homeworld:"https://swapi.co/api/planets/1/",
      mass:"77",
      name:"Luke Skywalker",
      skin_color:"fair",
      species:["https://swapi.co/api/species/1/"],
      starships:["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
      url:"https://swapi.co/api/people/1/"
    }
    const mockData = [ mockPerson, mockPerson ]
    const expected = [
      {
        name: "Luke Skywalker",
        homeworld: "https://swapi.co/api/planets/1/",
        species: ["https://swapi.co/api/species/1/"],
        population: "https://swapi.co/api/planets/1/",
        favorite: false,
        type: "people"
      },
      {
        name: "Luke Skywalker",
        homeworld: "https://swapi.co/api/planets/1/",
        species: ["https://swapi.co/api/species/1/"],
        population: "https://swapi.co/api/planets/1/",
        favorite: false,
        type: "people"
      }
    ]

    expect(cleaner.cleanSort('people', mockData)).toEqual(expected)
  })

  it('should clean the planets objects in the array of data passed in', () => {
    const mockPlanet = {
        climate:"temperate",
        created: "2014-12-10T11:35:48.479000Z",
        diameter: "12500",
        edited: "2014-12-20T20:58:18.420000Z",
        films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
        gravity: "1 standard",
        name: "Alderaan",
        orbital_period: "364",
        population: "2000000000",
        residents: ["https://swapi.co/api/people/5/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/81/"],
        rotation_period: "24",
        surface_water: "40",
        terrain: "grasslands, mountains",
        url: "https://swapi.co/api/planets/2/",
      }
    const mockDataArray = [mockPlanet, mockPlanet]
    const expected = [
      {
        name: 'Alderaan',
        terrain: 'grasslands, mountains',
        population: '2000000000',
        climate: 'temperate',
        residents: ["https://swapi.co/api/people/5/",   "https://swapi.co/api/people/68/", "https://swapi.co/api/people/81/"],
        favorite: false,
        type: 'planets'
      },
      {
        name: 'Alderaan',
        terrain: 'grasslands, mountains',
        population: '2000000000',
        climate: 'temperate',
        residents: ["https://swapi.co/api/people/5/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/81/"],
        favorite: false,
        type: 'planets'
      }
    ]

    expect(cleaner.cleanSort('planets', mockDataArray)).toEqual(expected)
  })

  it('should clean the vehicle objects in the array of data passed in', () => {
    const mockVehicle = {
      cargo_capacity:"50000",
      consumables:"2 months",
      cost_in_credits:"150000",
      created:"2014-12-10T15:36:25.724000Z",
      crew:"46",
      edited:"2014-12-22T18:21:15.523587Z",
      films:["https://swapi.co/api/films/1/"],
      length:"36.8",
      manufacturer:"Corellia Mining Corporation",
      max_atmosphering_speed:"30",
      model:"Digger Crawler",
      name:"Sand Crawler",
      passengers:"30",
      pilots:[],
      url:"https://swapi.co/api/vehicles/4/",
      vehicle_class: "wheeled"
    }
    const mockDataArray = [mockVehicle, mockVehicle]
    const expected = [
      {
        name: "Sand Crawler",
        model: "Digger Crawler",
        class: "wheeled",
        passengers: "30",
        favorite: false,
        type: 'vehicles'
      },
      {
        name: "Sand Crawler",
        model: "Digger Crawler",
        class: "wheeled",
        passengers: "30",
        favorite: false,
        type: 'vehicles'
      },
    ]

    expect(cleaner.cleanSort('vehicles', mockDataArray)).toEqual(expected)
  })
})