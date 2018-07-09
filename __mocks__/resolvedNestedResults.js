const cleanedPersonData = {
  favorite: false,
  homeworld: "https://swapi.co/api/planets/1/",
  index: 0,
  name: "Luke Skywalker",
  population: "https://swapi.co/api/planets/1/",
  species: ["https://swapi.co/api/species/1/"],
  type: "people"
}

const resolvedPeopleArray = [
  {
    favorite: false,
    homeworld: "Tatooine",
    index: 0,
    name: "Luke Skywalker",
    population: "200000",
    species: "Human",
    type: "people"
  },
  {
    favorite: false,
    homeworld: "Tatooine",
    index: 0,
    name: "Luke Skywalker",
    population: "200000",
    species: "Human",
    type: "people"
  }
]

export default {cleanedPersonData, resolvedPeopleArray};